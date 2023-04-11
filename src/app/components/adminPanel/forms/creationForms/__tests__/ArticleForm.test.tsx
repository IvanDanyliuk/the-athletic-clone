import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { articleToUpdate } from '../../../../../utils/testing/testDataMocks/materials';
import ArticleForm from '../ArticleForm';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('ArticleForm tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call useNavigate after submiting a creation form', async () => {
    renderWithProviders(<ArticleForm />);

    const titleField = screen.getAllByTestId('textField');
    fireEvent.change(titleField[0], { target: { value: 'Test Title' } });

    const select = screen.getAllByTestId('multiSelect');
    //eslint-disable-next-line
    fireEvent.change(select[0].querySelector('input')!, { target: { value: 'Premier League' } });
    
    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  test('should call useNavigate after submiting an updation form', async () => {
    renderWithProviders(<ArticleForm articleToUpdate={articleToUpdate} />);

    const titleField = screen.getAllByTestId('textField')[0];
    userEvent.type(titleField, 'Test Title');

    const select = screen.getAllByTestId('multiSelect');
    //eslint-disable-next-line
    fireEvent.change(select[0].querySelector('input')!, { target: { value: 'Premier League' } });

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});