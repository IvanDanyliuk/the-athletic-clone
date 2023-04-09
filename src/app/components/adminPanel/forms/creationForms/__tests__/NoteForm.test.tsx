import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { noteToUpdate } from '../../../../../utils/testing/testDataMocks/materials';
import NoteForm from '../NoteForm';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('NoteForm tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call useNavigate after submiting a creation form', async () => {
    renderWithProviders(<NoteForm />);

    const titleField = screen.getAllByTestId('textField');
    fireEvent.change(titleField[0], { target: { value: 'Test Title' } });

    const select = screen.getAllByTestId('labelSelect');
    //eslint-disable-next-line
    fireEvent.change(select[0].querySelector('input')!, { target: { value: 'Premier League' } });
    
    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  test('should call useNavigate after submiting an updation form', async () => {
    renderWithProviders(<NoteForm noteToUpdate={noteToUpdate} />);

    const titleField = screen.getAllByTestId('textField')[0];
    userEvent.type(titleField, 'Test Title');

    const select = screen.getAllByTestId('labelSelect');
    //eslint-disable-next-line
    fireEvent.change(select[0].querySelector('input')!, { target: { value: 'Premier League' } });

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});