import { cleanup, screen } from '@testing-library/react';
import { Competition } from '../';
import { setupClubsSuccessHandlers } from '../../utils/testing/serverMocks/clubs';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { clubToUpdate, clubsStateSuccessMock } from '../../utils/testing/testDataMocks/clubs';
import { competitionToUpdate, competitionsStateSuccessMock } from '../../utils/testing/testDataMocks/competitions';


describe('Club page tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the Competition page', async () => {
    renderWithProviders(
      <Competition />,
      {
        preloadedState: {
          competitions: {
            ...competitionsStateSuccessMock,
            data: {
              ...competitionsStateSuccessMock.data,
              competition: competitionToUpdate
            }
          }
        }
      }
    );
    expect(screen.getByText(competitionToUpdate.fullName)).toBeInTheDocument();
  });

  test('should render the loader component', async () => {
    renderWithProviders(
      <Competition />,
      {
        preloadedState: {
          competitions: {
            ...competitionsStateSuccessMock,
            data: {
              ...competitionsStateSuccessMock.data,
              competition: null
            }
          }
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});