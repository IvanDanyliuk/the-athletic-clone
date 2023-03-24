import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompetitionModel } from '../../app/models/components';
import * as api from '../../app/api/api';
import { ICompetition, ICompetitionDeleteQuery, ICompetitionsRequestData } from './types';


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

export const getAllCompetitions = createAsyncThunk(
  'competitions/getAllCompetitions',
  async (requestData: ICompetitionsRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getAllCompetitions(page, itemsPerPage, filterData, sortData);
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
)

export const deleteCompetition = createAsyncThunk(
  'competitions/deleteCompetition',
  async (deleteData: ICompetitionDeleteQuery, thunkAPI) => {
    const { id, page, itemsPerPage } = deleteData;
    try {
      const { data } = await api.deleteCompetition(id, page, itemsPerPage);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);