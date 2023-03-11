import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { MaterialModel } from '../../app/models/components';
import { IMaterialsRequestData } from './types';


export const createMaterial = createAsyncThunk(
  'materials/createMaterial',
  async (materialData: MaterialModel, thunkAPI) => {
    try {
      const { data } = await api.createMaterial(materialData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllMaterials = createAsyncThunk(
  'materials/getAllMaterials',
  async (requestData: IMaterialsRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData } = requestData;
    try {
      const { data } = await api.getAllMaterials(page, itemsPerPage, filterData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)