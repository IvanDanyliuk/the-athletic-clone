import { RequestHandler } from 'express';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import ClubModel from '../models/club';
import { CreateClubBody, GetAllClubsQuery, UpdateClubBody } from '../types/clubs';
import { deleteImage, setQueryParams, updateImage, uploadImage } from '../util/helpers';


export const getClubs: RequestHandler<unknown, unknown, unknown, GetAllClubsQuery> = async (req, res, next) => {
  const { page, itemsPerPage, filterData, sortData } = req.query;

  const order = !sortData || sortData.order === 'desc' ? -1 : 1;
  const sortIndicator = sortData ? sortData.indicator : 'createdAt';
  const query = filterData ? setQueryParams(filterData) : {}

  try {
    const clubs = await ClubModel
      .find(query)
      .sort({ [sortIndicator]: order })
      .skip(+page * +itemsPerPage)
      .limit(+itemsPerPage)
      .exec()

    const clubsCount = filterData ? 
      await ClubModel.countDocuments({ 'country': filterData.country }) : 
      await ClubModel.countDocuments({});

    res.status(200).json({ clubs, clubsCount });  
  } catch (error) {
    next(error)
  }
};

export const getClubsByCountry: RequestHandler = async (req, res, next) => {
  const { country } = req.query;
  try {
    const clubs = country !== 'International' ? 
      await ClubModel.find({ country }).sort({ createdAt: -1 }).exec() : 
      await ClubModel.find().sort({ createdAt: -1 }).exec();
    if(!clubs) {
      throw(createHttpError(404, 'Clubs not found'));
    }
    res.status(200).json(clubs);
  } catch (error) {
    next(error);
  }
};

export const getClub: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(!mongoose.isValidObjectId(id)) {
      throw(createHttpError(400, 'Invalid club id'));
    }
    const club = await ClubModel.findById(id);
    if(!club) {
      createHttpError(404, 'Club not found');
    }
    res.status(200).json(club);
  } catch (error) {
    next(error);
  }
};

export const createClub: RequestHandler<unknown, unknown, CreateClubBody,unknown> = async (req, res, next) => {
  const club = req.body;
  
  try {
    if(!club.fullName || !club.commonName || !club.shortName) {
      throw createHttpError(400, 'Club must have a full name, common name, and short name');
    }

    if(!club.country) {
      throw createHttpError(400, 'Club must have a country');
    }

    const clubLogoUrl = await uploadImage(club.clubLogoUrl!);

    const newClub = await ClubModel.create({
      ...club,
      clubLogoUrl
    });

    res.status(201).json(newClub);
  } catch (error) {
    next(error);
  }
};

export const updateClub: RequestHandler<unknown, unknown, UpdateClubBody, unknown> = async (req, res, next) => {
  const clubToUpdate = req.body;
  
  try {
    const currentClub = await ClubModel.findById(clubToUpdate._id);

    if(!currentClub) {
      throw(createHttpError(400, `Cannot find a club with such ID: ${clubToUpdate._id}`));
    }

    if(!mongoose.isValidObjectId(clubToUpdate._id)) {
      throw(createHttpError(400, 'Invalid club id'));
    }

    if(!clubToUpdate.fullName || !clubToUpdate.commonName || !clubToUpdate.shortName) {
      throw createHttpError(400, 'Club must have a full name, common name, and short name');
    }

    if(!clubToUpdate.country) {
      throw createHttpError(400, 'Club must have a country');
    }

    const clubLogoUrl = clubToUpdate && clubToUpdate.clubLogoUrl && clubToUpdate.clubLogoUrl !== currentClub.clubLogoUrl ? 
      await updateImage(clubToUpdate.clubLogoUrl, currentClub!.clubLogoUrl!) : 
      currentClub.clubLogoUrl;

    const updatedClub = await ClubModel.findByIdAndUpdate(clubToUpdate._id, { ...clubToUpdate, clubLogoUrl });
    
    res.status(200).json(updatedClub);
  } catch (error) {
    next(error);
  }
};

export const deleteClub: RequestHandler = async (req, res, next) => {
  const { id } = req.query;
  
  try {
    if(!mongoose.isValidObjectId(id)) {
      throw(createHttpError(400, 'Invalid club id'));
    }

    const club = await ClubModel.findById(id);
    if(club && club.clubLogoUrl) {
      await deleteImage(club.clubLogoUrl);
    }

    await ClubModel.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};