import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store } from '../../../../../features/store';
import Users from '../Users';


describe('Users tests', () => {
  test('should render the Users sub-page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Users />
          </LocalizationProvider>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Users/)).toBeInTheDocument();
  });
});