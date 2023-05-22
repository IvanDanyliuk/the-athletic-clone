import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { MaterialModel } from '../../app/models/components';
import { 
  IDeleteMaterialData, IMaterial, IMaterialsRequestData, 
  IHomepageSecondaryMaterialsRequestData, IRecentMaterialsRequestData
} from './types';
import { IUser, UserRoles } from '../users/types';


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

export const getMaterials = createAsyncThunk(
  'materials/getMaterials',
  async (requestData: IMaterialsRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getMaterials(page, itemsPerPage, filterData, sortData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getRecentMaterials = createAsyncThunk(
  'materials/getRecentMaterials',
  async (requestData: IRecentMaterialsRequestData, thunkAPI) => {
    const { materialsNumber, materialTypes } = requestData;
    try {
      const { data } = await api.getRecentMaterials(materialsNumber, materialTypes);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getHomepageSecondaryMaterials = createAsyncThunk(
  'materials/getHomepageSecondaryMaterials',
  async (requestData: IHomepageSecondaryMaterialsRequestData, thunkAPI) => {
    const { topMaterialsNum, postsNum } = requestData;
    try {
      const { data } = await api.getHomapageSecondaryMaterials(topMaterialsNum, postsNum);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getMaterial = createAsyncThunk(
  'materials/getMaterial',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await api.getMaterial(id);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAuthors = createAsyncThunk(
  'materials/getAuthors',
  async (_: void, thunkAPI) => {
    try {
      const { data } = await api.getUsersByRole(UserRoles.author);
      const authors = data.map((author: IUser) => `${author.firstName} ${author.lastName}`);
      return authors;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSearchValues = createAsyncThunk(
  'materials/getSearchValues',
  async (value: string, thunkAPI) => {
    try {
      const { data } = await api.getSearchValues(value);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

export const updateViewedMaterial = createAsyncThunk(
  'materials/likeMaterial',
  async (materialToUpdate: IMaterial, thunkAPI) => {
    try {
      const { data } = await api.updateMaterial(materialToUpdate);
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