import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { articleToUpdate } from '../../../../../utils/testing/testDataMocks/materials';
import ArticleForm from '../ArticleForm';
import { setupContentSuccessHandlers } from '../../../../../utils/testing/serverMocks/content';


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
    setupContentSuccessHandlers()
  });

  afterEach(() => {
    cleanup();
  });

  test('should call useNavigate after submiting a creation form', async () => {
    renderWithProviders(<ArticleForm />);

    const titleField = screen.getAllByTestId('textField');
    fireEvent.change(titleField[0], { target: { value: 'Test Title' } });
    fireEvent.change(titleField[2], { target: { value: 'Test Preview' } });

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

    const titleField = screen.getAllByTestId('textField');
    userEvent.type(titleField[0], 'Test Title');
    userEvent.type(titleField[2], 'Test Preview');

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