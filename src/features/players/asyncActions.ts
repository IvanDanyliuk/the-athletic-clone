import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { PlayerModel } from '../../app/models/components';
import { IDeletePlayerData, IPlayer, IPlayersRequestData } from './types';


export const createPlayer = createAsyncThunk(
  'players/createPlayer',
  async (playerData: PlayerModel, thunkAPI) => {
    try {
      const { data } = await api.createPlayer(playerData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.request.data);
    }
  }
);

export const getPlayers = createAsyncThunk(
  'players/getPlayers',
  async (requestData: IPlayersRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getPlayers(page, itemsPerPage, filterData, sortData,);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getPlayer = createAsyncThunk(
  'players/getPlayer',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await api.getPlayer(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updatePlayer = createAsyncThunk(
  'players/updatePlayer',
  async (playerToUpdate: IPlayer, thunkAPI) => {
    try {
      const { data } = await api.updatePlayer(playerToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

export const deletePlayer = createAsyncThunk(
  'players/deletePlayer',
  async (deleteData: IDeletePlayerData, thunkAPI) => {
    const { id, page, itemsPerPage } = deleteData;
    try {
      const { data } = await api.deletePlayer(id, page, itemsPerPage);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);