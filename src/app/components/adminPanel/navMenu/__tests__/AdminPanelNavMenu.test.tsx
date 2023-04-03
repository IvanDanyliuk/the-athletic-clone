import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminPanelNavMenu from '../AdminPanelNavMenu';


describe('AdminPanelNavMenu tests', () => {
  test('should render a menu list', () => {
    render(
      <MemoryRouter>
        <AdminPanelNavMenu />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(6);
  });
});