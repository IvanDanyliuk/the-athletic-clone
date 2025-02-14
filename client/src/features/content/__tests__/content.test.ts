import { cleanup } from '@testing-library/react';
import { setupContentErrorHandlers, setupContentSuccessHandlers } from '../../../app/utils/testing/serverMocks/content';
import { createContentSection, deleteContentSection, getContentSections, updateContentSection } from '../asyncActions';
import { addMaterialToContent, clearError, clearMaterialsToContent, handleEditingMode, setError, setMaterialsToContentToUpdate } from '../reducers';
import { store } from '../../store';
import { contentSectionToUpdate, contentStateSuccessMock, newContentSection } from '../../../app/utils/testing/testDataMocks/content';


describe('Redux tests: content_success cases', () => {
  beforeEach(() => {
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new content section by dispatching the createContentSection async action', async () => {
    let state = store.getState().content;
    await store.dispatch(createContentSection(newContentSection));
    state = store.getState().content;
    expect(state.content[0].name).toBe(newContentSection.name);
  });

  test('should get content sections by dispatching the getContentSections async action', async () => {
    let state = store.getState().content;
    await store.dispatch(getContentSections());
    state = store.getState().content;
    expect(state.content).toHaveLength(contentStateSuccessMock.content.length);
  });

  test('should update content section by dispatching the updateContentSection async action', async () => {
    let state = store.getState().content;
    await store.dispatch(updateContentSection(contentSectionToUpdate));
    state = store.getState().content;
    expect(state.content[0].name).toBe(contentSectionToUpdate.name);
  });

  test('should delete content section by dispatching the deleteContentSection async action', async () => {
    let state = store.getState().content;
    await store.dispatch(deleteContentSection(contentSectionToUpdate._id));
    state = store.getState().content;
    expect(state.content).toHaveLength(contentStateSuccessMock.content.length - 1);
  });

  test('should add material to the materialsToContent field by dispatching the addMaterialToContent action', () => {
    let state = store.getState().content;
    store.dispatch(addMaterialToContent(contentSectionToUpdate._id));
    state = store.getState().content;
    store.dispatch(addMaterialToContent(contentSectionToUpdate._id));
    state = store.getState().content;
    expect(state.materialsToContent).toHaveLength(contentStateSuccessMock.materialsToContent.length);
  });

  test('should clear the materialsToContent field by dispatching the clearMaterialsToContent action', () => {
    let state = store.getState().content;
    store.dispatch(clearMaterialsToContent());
    state = store.getState().content;
    expect(state.materialsToContent).toHaveLength(0);
  });

  test('should set the isContentEditingModeActive field as true by dispatching the handleEditingMode action', () => {
    let state = store.getState().content;
    store.dispatch(handleEditingMode(true));
    state = store.getState().content;
    expect(state.isContentEditingModeActive).toBeTruthy();
  });

  test('should set the materialsToContent field values by dispatching the setMaterialsToContentToUpdate action', () => {
    let state = store.getState().content;
    store.dispatch(setMaterialsToContentToUpdate(['642d8710d4be15abd18e94ad', '642d8711d4be15abd18e94ad',]));
    state = store.getState().content;
    expect(state.materialsToContent).toHaveLength(2);
  });
});

describe('Redux tests: content_error cases', () => {
  beforeEach(() => {
    setupContentErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should not create new content section by dispatching the createContentSection async action', async () => {
    let state = store.getState().content;
    await store.dispatch(createContentSection(newContentSection));
    state = store.getState().content;
    expect(state.error).toBe('CreateContent Section Error');
  });

  test('should not get content sections by dispatching the getContentSections async action', async () => {
    let state = store.getState().content;
    await store.dispatch(getContentSections());
    state = store.getState().content;
    expect(state.error).toBe('Get Content Sections Error');
  });

  test('should not update content section by dispatching the updateContentSection async action', async () => {
    let state = store.getState().content;
    await store.dispatch(updateContentSection(contentSectionToUpdate));
    state = store.getState().content;
    expect(state.error).toBe('Update Content Section Error');
  });

  test('should not delete content section by dispatching the deleteContentSection async action', async () => {
    let state = store.getState().content;
    await store.dispatch(deleteContentSection(contentSectionToUpdate._id));
    state = store.getState().content;
    expect(state.error).toBe('Delete Content Section Error');
  });

  test('should clear the error field by dispatching the clearError action', () => {
    let state = store.getState().content;
    store.dispatch(clearError());
    state = store.getState().content;
    expect(state.error).toBeNull();
  });
  
  test('should set an error value to the error field by dispatching the setError action', () => {
    let state = store.getState().content;
    store.dispatch(setError('Set Error'));
    state = store.getState().content;
    expect(state.error).toBe('Set Error');
  });
});