import { RequestHandler } from 'express';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import PlayerModel from '../models/player';
import ClubModel from '../models/club';
import { deleteImage, setQueryParams, updateImage, uploadImage } from '../util/helpers';
import { CreatePlayerBody, GetAllPlayersQuery, UpdatePlayerBody } from '../types/players';


export const getPlayers: RequestHandler<unknown, unknown, unknown, GetAllPlayersQuery> = async (req, res, next) => {
  const { page, itemsPerPage, filterData, sortData } = req.query;

  const order = !sortData || sortData.order === 'desc' ? -1 : 1;
  const sortIndicator = sortData ? sortData.indicator : 'createdAt';
  const query = filterData ? setQueryParams(filterData) : {};

  try {
    const players = await PlayerModel
      .find(query)
      .populate('club')
      .sort({ [sortIndicator]: order })
      .skip(+page * +itemsPerPage)
      .limit(+itemsPerPage)
      .exec();
    
    const playersCount = await PlayerModel.countDocuments(query);

    res.status(200).json({ players, playersCount });
  } catch (error) {
    next(error);
  }
};

export const getPlayer: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(!mongoose.isValidObjectId(id)) {
      throw(createHttpError(400, 'Invalid player id'));
    }

    const player = await PlayerModel.findById(id).populate('club').exec();
    res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

export const createPlayer: RequestHandler<unknown, unknown, CreatePlayerBody, unknown> = async (req, res, next) => {
  const player = req.body;
  try {
    if(!player.firstName || !player.lastName) {
      throw createHttpError(400, 'Player must have first name and last name');
    }

    if(!player.birthDate) {
      throw createHttpError(400, 'Player must have a birth date');
    }

    if(!player.country) {
      throw createHttpError(400, 'Player must have a country');
    }

    if(!player.position) {
      throw createHttpError(400, 'Player must have a position');
    }

    const club = player.club ? 
      await ClubModel.findById(player.club).exec() : 
      undefined;

    const photoUrl = await uploadImage(player.photoUrl!);

    const playerData = {
      ...player,
      photoUrl,
      club
    };

    const newPlayer = await PlayerModel.create(playerData);

    res.status(201).json(newPlayer);
  } catch (error) {
    next(error);
  }
};

export const updatePlayer: RequestHandler<unknown, unknown, UpdatePlayerBody, unknown> = async (req, res, next) => {
  const playerToUpdate = req.body;

  try {
    const currentPlayer = await PlayerModel.findById(playerToUpdate._id);

    if(!currentPlayer) {
      throw(createHttpError(400, `Cannot find a player with such ID: ${playerToUpdate._id}`));
    }

    if(!mongoose.isValidObjectId(playerToUpdate._id)) {
      throw(createHttpError(400, 'Invalid player id'));
    }

    if(!playerToUpdate.firstName || !playerToUpdate.lastName) {
      throw createHttpError(400, 'Player must have first name and last name');
    }

    if(!playerToUpdate.birthDate) {
      throw createHttpError(400, 'Player must have a birth date');
    }

    if(!playerToUpdate.country) {
      throw createHttpError(400, 'Player must have a country');
    }

    if(!playerToUpdate.position) {
      throw createHttpError(400, 'Player must have a position');
    }

    const photoUrl = playerToUpdate && playerToUpdate.photoUrl && playerToUpdate.photoUrl !== currentPlayer.photoUrl ? 
      await updateImage(playerToUpdate.photoUrl, currentPlayer!.photoUrl!) : 
      currentPlayer.photoUrl;

    const updatedPlayer = await PlayerModel.findByIdAndUpdate(playerToUpdate._id, { ...playerToUpdate, photoUrl });
    res.status(200).json(updatedPlayer);
  } catch (error) {
    next(error);
  }
};

export const deletePlayer: RequestHandler = async (req, res, next) => {
  const { id } = req.query;

  try {
    if(!mongoose.isValidObjectId(id)) {
      throw(createHttpError(400, 'Invalid player id'));
    }

    const player = await PlayerModel.findById(id);
    if(player && player.photoUrl) {
      await deleteImage(player.photoUrl);
    }

    await PlayerModel.findByIdAndDelete(id);
    
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};