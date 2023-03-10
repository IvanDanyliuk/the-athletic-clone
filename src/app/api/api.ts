import axios from 'axios';
import { ILoginCredentials } from '../../features/users/types';
import { MaterialModel } from '../models/components';
import { IUser } from '../models/users';

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL, withCredentials: true });

export const login = (loginData: ILoginCredentials) => API.post('/users/login', loginData);
export const signup = (registerData: IUser) => API.post('/users/signup', registerData);
export const logout = () => API.post('/users/logout');
export const getAuthenticatedUser = () => API.get('/users');

export const createMaterial = (materialData: MaterialModel) => API.post('/materials', materialData);