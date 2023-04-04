import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store } from '../../../../../features/store';
import Players from '../Players';


describe('Players tests', () => {
  test('should render the Players sub-page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Players />
          </LocalizationProvider>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Players/)).toBeInTheDocument();
  });
});