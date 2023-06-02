import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store } from '../../../../../features/store';
import { Materials } from '../';


describe('Materials tests', () => {
  test('should render the Materials sub-page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Materials />
          </LocalizationProvider>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Materials/)).toBeInTheDocument();
  });
});