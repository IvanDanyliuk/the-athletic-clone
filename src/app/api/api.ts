import axios from 'axios';
import { IClub } from '../../features/clubs/types';
import { ICompetition } from '../../features/competitions/types';
import { IMaterial } from '../../features/materials/types';
import { IPlayer } from '../../features/players/types';
import { ISchedule } from '../../features/schedules/types';
import { ILoginCredentials, IUser } from '../../features/users/types';
import { ClubModel, CompetitionModel, ContentSectionModel, MaterialModel, PlayerModel, ScheduleModel } from '../models/components';
import { UserModel } from '../models/users';
import { IContentSectionToUpdate } from '../../features/content/types';


const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL, withCredentials: true });

export const login = (loginData: ILoginCredentials) => API.post('/users/login', loginData);
export const signup = (registerData: UserModel) => API.post('/users/signup', registerData);
export const logout = () => API.post('/users/logout');
export const createUser = (userData: UserModel) => API.post('/users/new-user', userData);
export const getUsersByRole = (role: string) => API.get('/users/by-role', { params: { role } });
export const getAuthenticatedUser = () => API.get('/users');
export const getUsers = (page: number, itemsPerPage: number, filterData?: any, sortData?: any) => API.get('/users/all', { params: { page, itemsPerPage, filterData, sortData } });
export const getUsersLocations = () => API.get('/users/locations');
export const updateUser = (userToUpdate: IUser) => API.patch('/users', userToUpdate);
export const updatePassword = (id: string, newPassword: string, currPassword: string) => API.patch('/users/password', { id, newPassword, currPassword });
export const deleteUser = (id: string, page: number, itemsPerPage: number) => API.delete('/users', { params: { id, page, itemsPerPage } });

export const createMaterial = (materialData: MaterialModel) => API.post('/materials', materialData);
export const getMaterials = (page: number, itemsPerPage: number, filterData?: any, sortData?: any) => API.get('/materials', { params: { page, itemsPerPage, filterData, sortData } });
export const getArticles = (page: number, itemsPerPage: number, filterData?: any) => API.get('/materials/articles', { params: { page, itemsPerPage, filterData } });
export const getNotes = (page: number, itemsPerPage: number, filterData?: any) => API.get('/materials/notes', { params: { page, itemsPerPage, filterData } });
export const getRealtimePosts = (page: number, itemsPerPage: number, filterData?: any) => API.get('/materials/real-time-posts', { params: { page, itemsPerPage, filterData } });
export const getRecentMaterials = (materialsNumber: number, materialTypes: string[]) => API.get('/materials/recent', { params: { materialsNumber, materialTypes } });
export const getHomapageSecondaryMaterials = (topMaterialsNum: number, postsNum: number) => API.get('/materials/homepage', { params: { topMaterialsNum, postsNum } });
export const getSearchValues = (value: string) => API.get('/materials/search-values', { params: { value } });
export const searchMaterials = (value: string | string[], type: string | string[], materialsNum?: number) => API.get('/materials/search', { params: { value, type, materialsNum } });
export const getMaterial = (id: string) => API.get(`/materials/${id}`);
export const updateMaterial = (materialToUpdate: IMaterial) => API.patch('/materials', materialToUpdate);
export const deleteMaterial = (id: string, page: number, itemsPerPage: number) => API.delete('/materials', { params: { id, page, itemsPerPage } });

export const createClub = (clubData: ClubModel) => API.post('/clubs', clubData);
export const getClubs = (page: number, itemsPerPage: number, filterData?: any, sortData?: any) => API.get('/clubs', { params: { page, itemsPerPage, filterData, sortData } });
export const getClubsByCountry = (country?: string) => API.get('/clubs/country', { params: { country } });
export const getClub = (id: string) => API.get(`/clubs/${id}`);
export const updateClub = (clubToUpdate: IClub) => API.patch('/clubs', clubToUpdate);
export const deleteClub = (id: string, page: number, itemsPerPage: number) => API.delete('/clubs', { params: { id, page, itemsPerPage } });

export const createCompetition = (competitionData: CompetitionModel) => API.post('/competitions', competitionData);
export const getCompetitions = (page?: number, itemsPerPage?: number, filterData?: any, sortData?: any) => API.get('/competitions', { params: { page, itemsPerPage, filterData, sortData } });
export const getAllCompetitions = () => API.get('/competitions/all');
export const getCompetition = (id: string) => API.get(`/competitions/${id}`);
export const updateCompetition = (competitionToUpdate: ICompetition) => API.patch('/competitions', competitionToUpdate);
export const deleteCompetition = (id: string, page: number, itemsPerPage: number) => API.delete('/competitions', { params: { id, page, itemsPerPage } });

export const createPlayer = (playerData: PlayerModel) => API.post('/players', playerData);
export const getPlayers = (page?: number, itemsPerPage?: number, filterData?: any, sortData?: any) => API.get('/players', { params: { page, itemsPerPage, filterData, sortData } });
export const getPlayer = (id: string) => API.get(`/players/${id}`);
export const getPlayersByClub = (clubId: string) => API.get('/players/by-club', { params: { clubId } });
export const updatePlayer = (playerToUpdate: IPlayer) => API.patch('/players', playerToUpdate);
export const deletePlayer = (id: string, page: number, itemsPerPage: number) => API.delete('/players', { params: { id, page, itemsPerPage } });

export const createSchedule = (scheduleData: ScheduleModel) => API.post('/schedules', scheduleData);
export const getSchedules = (page?: number, itemsPerPage?: number, filterData?: any, sortData?: any) => API.get('/schedules', { params: { page, itemsPerPage, filterData, sortData } });
export const getSchedulesByClub = (season: string, clubId: string) => API.get('/schedules/by-club', { params: { season, clubId } });
export const getSchedule = (season: string, leagueId: string) => API.get('/schedules/schedule', { params: { season, leagueId } });
export const updateSchedule = (scheduleToUpdate: ISchedule) => API.patch('/schedules', scheduleToUpdate);
export const deleteSchedule = (id: string, page: number, itemsPerPage: number) => API.delete('/schedules', { params: { id, page, itemsPerPage } });

export const createContentSection = (contentSectionData: ContentSectionModel) => API.post('/content', contentSectionData);
export const getContentSections = () => API.get('/content');
export const updateContentSection = (contentSectionToUpdate: IContentSectionToUpdate) => API.patch('/content', contentSectionToUpdate);
export const deleteContentSection = (id: string) => API.delete('/content', { params: { id } });