import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../../features/store';
import Clubs from '../Clubs';


describe('Clubs tests', () => {
  test('should render the Clubs sub-page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Clubs />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Clubs/)).toBeInTheDocument();
  });
});