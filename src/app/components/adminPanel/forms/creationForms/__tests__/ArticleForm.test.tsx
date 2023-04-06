import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store } from '../../../../../../features/store';
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import ArticleForm from '../ArticleForm';
import userEvent from '@testing-library/user-event';



describe('ArticleForm tests', () => {
  beforeAll(() => {
    setupMaterialsSuccessHandlers();
  });

  test('should render the Article form', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ArticleForm />
          </LocalizationProvider>
        </MemoryRouter>
      </Provider>
    );

    const textInputs = screen.getAllByRole('textbox');
    userEvent.type(textInputs[0], 'This is title!');
    
    const submitBtn = screen.getByRole('button', { name: /Submit/ });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      screen.debug(undefined, 300000);
    });
  });
});