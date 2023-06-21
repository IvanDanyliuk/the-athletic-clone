import { screen, render, cleanup } from '@testing-library/react';
import { NotFound } from '../';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { setupMaterialsSuccessHandlers } from '../../utils/testing/serverMocks/materials';
import { articleToUpdate, materialsStateSuccessMock, postToUpdate } from '../../utils/testing/testDataMocks/materials';
import { leagueMaterialsPropsMock } from '../../utils/testing/testDataMocks/content';


describe('NotFound page tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the page message', () => {
    renderWithProviders(
      <NotFound />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              homepage: {
                topMaterials: materialsStateSuccessMock.data.main.materials,
                latestPosts: [postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate],
                mustRead: articleToUpdate,
                leagueMaterials: leagueMaterialsPropsMock
              },
            },
          }
        }
      }
    );
    expect(screen.getByText('Sorry this page isn’t available.')).toBeInTheDocument();
  });

  test('should render the message if the must read article does not exist', () => {
    renderWithProviders(
      <NotFound />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              homepage: {
                ...materialsStateSuccessMock.data.homepage,
                mustRead: null,
              },
            },
          }
        }
      }
    );
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});