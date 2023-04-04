import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackLink from '../BackLink';



describe('BackLink tests', () => {
  test('should render a link', () => {
    render(
      <MemoryRouter>
        <BackLink title='Go Back' link='/main' />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Back/ })).toBeInTheDocument();
  });
});