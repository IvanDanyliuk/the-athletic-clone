import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { competitionToUpdate } from '../../../../../utils/testing/testDataMocks/competitions';
import CompetitionForm from '../CompetitionForm';
// import { getCountries } from '../../../../../services/countries';



const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));

// jest.mock('../../../../../services/countries', () => ({
//   ...jest.requireActual('react-router-dom') as any,
//   getCountries: () => jest.fn().mockImplementation(() => {
//     return ['Test Country 1', 'Test Country 2'];
//   }),
// }));


describe('CompetitionForm tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the creation form after passing competition data', async () => {
    renderWithProviders(<CompetitionForm />);

    const selectField = screen.getAllByTestId('selectField');
    const multiSelectField = screen.getByTestId('multiSelect');
    const textFields = screen.getAllByRole('textbox');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    //eslint-disable-next-line
    fireEvent.change(selectField[0].querySelector('input')! as HTMLInputElement, { target: { value: 'Test Country 1' } });
    //eslint-disable-next-line
    fireEvent.change(multiSelectField.querySelector('input')!, { target: { value: 'Test Club 1,Test Club 2' } });
    fireEvent.change(textFields[0], { target: { value: 'Test Full Name' } });
    fireEvent.change(textFields[1], { target: { value: 'Test Short Name' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  test('should submit the updation form after passing competition data', async () => {
    renderWithProviders(<CompetitionForm competitionToUpdate={competitionToUpdate} />);

    const selectField = screen.getAllByTestId('selectField');
    const multiSelectField = screen.getByTestId('multiSelect');
    const textFields = screen.getAllByRole('textbox');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    //eslint-disable-next-line
    fireEvent.change(selectField[0].querySelector('input')! as HTMLInputElement, { target: { value: 'Test Country' } });
    //eslint-disable-next-line
    fireEvent.change(multiSelectField.querySelector('input')!, { target: { value: 'Test Club 1' } });
    fireEvent.change(textFields[0], { target: { value: 'Test Full Name' } });
    fireEvent.change(textFields[1], { target: { value: 'Test Short Name' } });
    fireEvent.click(submitBtn);
    
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});