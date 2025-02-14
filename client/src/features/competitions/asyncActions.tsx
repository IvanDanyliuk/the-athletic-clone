import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompetitionModel } from '../../app/models/components';
import * as api from '../../app/api/api';
import { ICompetition, ICompetitionsRequestData } from './types';


export const createCompetition = createAsyncThunk(
  'competitions/createCompetition',
  async (competitionData: CompetitionModel, thunkAPI) => {
    try {
      const { data } = await api.createCompetition(competitionData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCompetitions = createAsyncThunk(
  'competitions/getCompetitions',
  async (requestData: ICompetitionsRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getCompetitions(page, itemsPerPage, filterData, sortData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllCompetitions = createAsyncThunk(
  'competitions/getAllCompetitions',
  async (_: void, thunkAPI) => {
    try {
      const { data } = await api.getAllCompetitions();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCompetition = createAsyncThunk(
  'competitions/getCompetition',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await api.getCompetition(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateCompetition = createAsyncThunk(
  'competitions/updateCompetition',
  async (competitionToUpdate: ICompetition, thunkAPI) => {
    try {
      const { data } = await api.updateCompetition(competitionToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteCompetition = createAsyncThunk(
  'competitions/deleteCompetition',
  async (id: string, thunkAPI) => {
    try {
      await api.deleteCompetition(id);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);