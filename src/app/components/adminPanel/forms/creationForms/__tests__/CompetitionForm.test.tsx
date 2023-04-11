import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { competitionToUpdate } from '../../../../../utils/testing/testDataMocks/competitions';
import CompetitionForm from '../CompetitionForm';



const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('CompetitionForm tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the creation form after passing competition data', () => {
    renderWithProviders(<CompetitionForm />);

    const slectField = screen.getByTestId('selectField');
    const textFields = screen.getAllByRole('textbox');
    
    fireEvent.change(slectField.querySelector('input')!, { target: { value: 'Test Country' } });
    

    screen.debug(undefined, 300000);
  })
});