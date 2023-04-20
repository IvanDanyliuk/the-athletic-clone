import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { ContentSectionModel } from '../../app/models/components';
import { IContentSection, IContentSectionToUpdate } from './types';


export const createContentSection = createAsyncThunk(
  'content/createContentSection',
  async (contentSectionData: ContentSectionModel, thunkAPI) => {
    try {
      const { data } = await api.createContentSection(contentSectionData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getContentSections = createAsyncThunk(
  'content/getContentSections',
  async (_: void, thunkAPI) => {
    try {
      const { data } = await api.getContentSections();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateContentSection = createAsyncThunk(
  'content/updateContentSection',
  async (contentSectionToUpdate: IContentSectionToUpdate, thunkAPI) => {
    try {
      const { data } = await api.updateContentSection(contentSectionToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);