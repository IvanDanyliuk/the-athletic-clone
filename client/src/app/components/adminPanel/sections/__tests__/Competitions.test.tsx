import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../../features/store';
import Competitions from '../Competitions';


describe('Competitions tests', () => {
  test('should render the Competitions sub-page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Competitions />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Competitions/)).toBeInTheDocument();
  });
});