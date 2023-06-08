import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { ScheduleModel } from '../../app/models/components';
import { IDeleteScheduleData, IGetScheduleQuery, IGetSchedulesByClubQuery, ISchedule, ISchedulesRequestData } from './types';


export const createSchedule = createAsyncThunk(
  'schedules/createSchedule',
  async (scheduleData: ScheduleModel, thunkAPI) => {
    try {
      const { data } = await api.createSchedule(scheduleData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSchedules = createAsyncThunk(
  'schedules/getSchedules',
  async (requestData: ISchedulesRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getSchedules(page, itemsPerPage, filterData, sortData,);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSchedulesByClub = createAsyncThunk(
  'schedules/getSchedulesByClub',
  async (requestData: IGetSchedulesByClubQuery, thunkAPI) => {
    const { season, clubId } = requestData;
    try {
      const { data } = await api.getSchedulesByClub(season, clubId);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSchedule = createAsyncThunk(
  'schedules/getSchedule',
  async (requestData: IGetScheduleQuery, thunkAPI) => {
    const { season, leagueId } = requestData;
    try {
      const { data } = await api.getSchedule(season, leagueId);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getRecentMatches = createAsyncThunk(
  'schedules/getRecentMatches',
  async (requestData: ISchedulesRequestData, thunkAPI) => {
    const { filterData } = requestData;
    const currentDate = new Date().getTime();
    try {
      const { data } = await api.getSchedules(undefined, undefined, filterData);
      const leagueMatches = data.map((schedule: ISchedule) => ({
        league: schedule.competition.shortName,
        matches: schedule.fixture.reduce((prev, curr) => {
          const a = Math.abs(new Date(curr.basicDate).getTime() - currentDate);
          const b = Math.abs(new Date(prev.basicDate).getTime() - currentDate);
          return a - b < 0 ? curr : prev;
        }).games
      }));
      return leagueMatches;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateSchedule = createAsyncThunk(
  'schedules/updateSchedule',
  async (scheduleToUpdate: ISchedule, thunkAPI) => {
    try {
      const { data } = await api.updateSchedule(scheduleToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  'schedules/deleteSchedule',
  async (deleteData: IDeleteScheduleData, thunkAPI) => {
    const { id, page, itemsPerPage } = deleteData;
    try {
      const { data } = await api.deleteSchedule(id, page, itemsPerPage);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

