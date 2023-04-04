import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store } from '../../../../../features/store';
import Schedules from '../Schedules';


describe('Schedules tests', () => {
  test('should render the Schedules sub-page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Schedules />
          </LocalizationProvider>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Schedules/)).toBeInTheDocument();
  });
});