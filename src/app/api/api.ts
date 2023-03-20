import axios from 'axios';
import { IMaterial } from '../../features/materials/types';
import { ILoginCredentials, IUser } from '../../features/users/types';
import { MaterialModel } from '../models/components';
import { UserModel } from '../models/users';


const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL, withCredentials: true });

export const login = (loginData: ILoginCredentials) => API.post('/users/login', loginData);
export const signup = (registerData: UserModel) => API.post('/users/signup', registerData);
export const logout = () => API.post('/users/logout');
export const getAuthenticatedUser = () => API.get('/users');
export const getAllUsers = (page: number, itemsPerPage: number, filterData?: any, sortData?: any) => API.get('/users/all', { params: { page, itemsPerPage, filterData, sortData } });
export const getUsersLocations = () => API.get('/users/locations');
export const updateUser = (userToUpdate: IUser) => API.patch('/users', userToUpdate);
export const deleteUser = (id: string, page: number, itemsPerPage: number) => API.delete('/users', { params: { id, page, itemsPerPage } });

export const createMaterial = (materialData: MaterialModel) => API.post('/materials', materialData);
export const getAllMaterials = (page: number, itemsPerPage: number, filterData?: any, sortData?: any) => API.get('/materials/all', { params: { page, itemsPerPage, filterData, sortData } });
export const getArticles = (page: number, itemsPerPage: number, filterData?: any) => API.get('/materials/articles', { params: { page, itemsPerPage, filterData } });
export const getNotes = (page: number, itemsPerPage: number, filterData?: any) => API.get('/materials/notes', { params: { page, itemsPerPage, filterData } });
export const getRealtimePosts = (page: number, itemsPerPage: number, filterData?: any) => API.get('/materials/real-time-posts', { params: { page, itemsPerPage, filterData } });
export const updateMaterial = (materialToUpdate: IMaterial) => API.patch('/materials', materialToUpdate);
export const deleteMaterial = (id: string, page: number, itemsPerPage: number) => API.delete('/materials', { params: { id, page, itemsPerPage } });