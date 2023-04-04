import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store } from '../../../../../../features/store';
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { ArticleForm } from '..';



describe('ArticleForm tests', () => {
  beforeAll(() => {
    setupMaterialsSuccessHandlers();
  });

  test('should render the Article form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ArticleForm />
          </LocalizationProvider>
        </MemoryRouter>
      </Provider>
    );

    screen.debug(undefined, 300000)
  });
});