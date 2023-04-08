import { render, screen, act, fireEvent, cleanup, waitFor, getByRole } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import ArticleForm from '../ArticleForm';
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../../../../features/store';
import { MemoryRouter } from 'react-router-dom';
import { articleToUpdate } from '../../../../../utils/testing/testDataMocks/materials';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
// import { act } from 'react-dom/test-utils';


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

  test('should render the creation form', async () => {
    const { container } = renderWithProviders(<ArticleForm />);

    const titleField = screen.getAllByTestId('textField');
    fireEvent.change(titleField[0], { target: { value: 'Test Title' } });
    
    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    // await waitFor(() => {
    //   expect(mockedUseNavigate).toHaveBeenCalled();
    // });
  });

  test('should call useNavigate after submiting an updation form', async () => {
    renderWithProviders(<ArticleForm articleToUpdate={articleToUpdate} />);

    const titleField = screen.getAllByTestId('textField')[0];
    userEvent.type(titleField, 'Test Title');

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});