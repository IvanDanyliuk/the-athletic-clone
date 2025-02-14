import { cleanup, screen } from '@testing-library/react';
import { Club } from '../';
import { setupClubsSuccessHandlers } from '../../utils/testing/serverMocks/clubs';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { clubToUpdate, clubsStateSuccessMock } from '../../utils/testing/testDataMocks/clubs';


describe('Club page tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the Club page', async () => {
    renderWithProviders(
      <Club />,
      {
        preloadedState: {
          clubs: {
            ...clubsStateSuccessMock,
            data: {
              ...clubsStateSuccessMock.data,
              club: clubToUpdate
            }
          }
        }
      }
    );
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  test('should render the loader component', async () => {
    renderWithProviders(
      <Club />,
      {
        preloadedState: {
          clubs: {
            ...clubsStateSuccessMock,
            data: {
              ...clubsStateSuccessMock.data,
              club: null
            }
          }
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});