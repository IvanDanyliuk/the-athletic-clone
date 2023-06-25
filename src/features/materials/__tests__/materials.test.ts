import { cleanup } from '@testing-library/react';
import { setupMaterialsErrorHandlers, setupMaterialsSuccessHandlers } from '../../../app/utils/testing/serverMocks/materials';
import { 
  createMaterial, deleteMaterial, getAuthors, getHomepageSecondaryMaterials, 
  getLeagueMaterials, getMaterial, getMaterials, getRecentMaterials, getSearchValues, 
  searchMaterials, searchRecentMaterials, updateMaterial, updateViewedMaterial 
} from '../asyncActions';
import { clearError, clearFilters, clearMaterial, clearSearch, clearSearchValues, setFilters } from '../reducers';
import { store } from '../../store';
import { articleToUpdate, materialsStateSuccessMock, newArticle } from '../../../app/utils/testing/testDataMocks/materials';
import { userToUpdate, usersStateSuccessMock } from '../../../app/utils/testing/testDataMocks/users';
import { setupUsersErrorHandlers, setupUsersSuccessHandlers } from '../../../app/utils/testing/serverMocks/users';
import { competitionsStateSuccessMock } from '../../../app/utils/testing/testDataMocks/competitions';


describe('Redux tests: materials_success cases', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new material by dispatching the createMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(createMaterial(newArticle));
    state = store.getState().materials;
    expect(state.data.main.materials[0].title).toBe(newArticle.title);
  });

  test('should delete material by dispatching the deleteMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(deleteMaterial({ id: articleToUpdate._id, page: 0, itemsPerPage: 10 }));
    state = store.getState().materials;
    expect(state.data.main.materials).toHaveLength(state.data.main.materials.length);
  });

  test('should get authors by dispatching the getAuthors async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getAuthors());
    state = store.getState().materials;
    expect(state.authors).toHaveLength(usersStateSuccessMock.data.users.length);
  });

  test('should get homepage secondary materials by dispatching the getHomepageSecondaryMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getHomepageSecondaryMaterials({ postsNum: 10, topMaterialsNum: 6 }));
    state = store.getState().materials;
    expect(state.data.homepage.topMaterials).toHaveLength(materialsStateSuccessMock.data.homepage.topMaterials.length);
  });

  test('should get league materials by dispatching the getLeagueMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getLeagueMaterials({ type: ['league'], value: 'Premier League' }));
    state = store.getState().materials;
    console.log(state)
    expect(state.data.main.materials).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });

  test('should get material by dispatching the getMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getMaterial(articleToUpdate._id));
    state = store.getState().materials;
    expect(state.data.material?.title).toBe(articleToUpdate.title);
  });

  test('should get materials by dispatching the getMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getMaterials({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().materials;
    expect(state.data.main.materials).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });

  test('should get recent materials by dispatching the getRecentMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getRecentMaterials({ materialsNumber: 10, materialTypes: ['article', 'note'] }));
    state = store.getState().materials;
    expect(state.data.main.materials).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });

  test('should search recent materials by dispatching the searchRecentMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(searchRecentMaterials(['article', 'note']));
    state = store.getState().materials;
    expect(state.search).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });

  test('should get search values by dispatching the getSearchValues async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getSearchValues('Arsenal'));
    state = store.getState().materials;
    expect(state.searchValues.competitions).toHaveLength(competitionsStateSuccessMock.data.main.competitions.length)
  });

  test('should get search materials by dispatching the searchMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(searchMaterials({ type: ['article'], value: 'Arsenal' }));
    state = store.getState().materials;
    expect(state.search).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });

  test('should update material by dispatching the updateMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(updateMaterial(articleToUpdate));
    state = store.getState().materials;
    expect(state.data.main.materials[0].title).toBe(articleToUpdate.title);
  });

  test('should update viewed material by dispatching the updateViewedMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(updateViewedMaterial(articleToUpdate));
    state = store.getState().materials;
    expect(state.data.material?.views).toBe(articleToUpdate.views!);
  });

  test('should set filters by dispatching the setFilters action', () => {
    let state = store.getState().materials;
    store.dispatch(setFilters({ type: 'article' }));
    state = store.getState().materials;
    expect(state.filters?.type).toBe('article');
  });

  test('should clear filters by dispatching the clearFilters action', () => {
    let state = store.getState().materials;
    store.dispatch(clearFilters());
    state = store.getState().materials;
    expect(state.filters).toBeNull();
  });

  test('should clear material by dispatching the clearMaterial action', () => {
    let state = store.getState().materials;
    store.dispatch(clearMaterial());
    state = store.getState().materials;
    expect(state.data.material).toBeNull();
  });

  test('should clear search field by dispatching the clearSearch action', () => {
    let state = store.getState().materials;
    store.dispatch(clearSearch());
    state = store.getState().materials;
    expect(state.search).toBeNull();
  });

  test('should clear search values field by dispatching the clearSearchValues action', () => {
    let state = store.getState().materials;
    store.dispatch(clearSearchValues());
    state = store.getState().materials;
    expect(state.searchValues).toBeNull();
  });
});

describe('Redux tests: materials_error cases', () => {
  beforeEach(() => {
    setupMaterialsErrorHandlers();
    setupUsersErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should not create new material by dispatching the createMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(createMaterial(newArticle));
    state = store.getState().materials;
    expect(state.error).toBe('Create Material Error');
  });

  test('should not delete material by dispatching the deleteMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(deleteMaterial({ id: articleToUpdate._id, page: 0, itemsPerPage: 10 }));
    state = store.getState().materials;
    expect(state.error).toBe('Delete Material Error');
  });

  test('should not get authors by dispatching the getAuthors async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getAuthors());
    state = store.getState().materials;
    expect(state.error).toBe('Users By Role Error');
  });

  test('should not get homepage secondary materials by dispatching the getHomepageSecondaryMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getHomepageSecondaryMaterials({ postsNum: 10, topMaterialsNum: 6 }));
    state = store.getState().materials;
    expect(state.error).toBe('Get Homepage Materials Error');
  });

  test('should not get league materials by dispatching the getLeagueMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getLeagueMaterials({ type: ['league'], value: 'Premier League' }));
    state = store.getState().materials;
    expect(state.error).toBe('Search Error');
  });

  test('should not get material by dispatching the getMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getMaterial(articleToUpdate._id));
    state = store.getState().materials;
    expect(state.error).toBe('Get Material Error');
  });

  test('should not get materials by dispatching the getMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getMaterials({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().materials;
    expect(state.error).toBe('Get Materials Error');
  });

  test('should not get recent materials by dispatching the getRecentMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getRecentMaterials({ materialsNumber: 10, materialTypes: ['article', 'note'] }));
    state = store.getState().materials;
    expect(state.error).toBe('Get Recent Materials Error');
  });

  test('should not search recent materials by dispatching the searchRecentMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(searchRecentMaterials(['article', 'note']));
    state = store.getState().materials;
    expect(state.error).toBe('Get Recent Materials Error');
  });

  test('should not get search values by dispatching the getSearchValues async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(getSearchValues('Arsenal'));
    state = store.getState().materials;
    expect(state.error).toBe('Get Search Values Error')
  });

  test('should not get search materials by dispatching the searchMaterials async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(searchMaterials({ type: ['article'], value: 'Arsenal' }));
    state = store.getState().materials;
    expect(state.error).toBe('Search Error');
  });

  test('should not update material by dispatching the updateMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(updateMaterial(articleToUpdate));
    state = store.getState().materials;
    expect(state.error).toBe('Update Material Error');
  });

  test('should not update viewed material by dispatching the updateViewedMaterial async action', async () => {
    let state = store.getState().materials;
    await store.dispatch(updateViewedMaterial(articleToUpdate));
    state = store.getState().materials;
    expect(state.error).toBe('Update Material Error');
  });
  
  test('should clear error by dipatching the clearError action', () => {
    let state = store.getState().materials;
    store.dispatch(clearError());
    state = store.getState().materials;
    expect(state.error).toBeNull();
  });
});