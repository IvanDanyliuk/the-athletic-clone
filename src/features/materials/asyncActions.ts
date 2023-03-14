import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { MaterialModel } from '../../app/models/components';
import { IDeleteMaterialData, IMaterial, IMaterialsRequestData } from './types';


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
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getAllMaterials(page, itemsPerPage, filterData, sortData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateMaterial = createAsyncThunk(
  'materials/updateMaterial',
  async (materialToUpdate: IMaterial, thunkAPI) => {
    try {
      const { data } = await api.updateMaterial(materialToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteMaterial = createAsyncThunk(
  'materials/deleteMaterial',
  async (deleteData: IDeleteMaterialData, thunkAPI) => {
    const { id, page, itemsPerPage } = deleteData;
    try {
      const { data } = await api.deleteMaterial(id, page, itemsPerPage);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);