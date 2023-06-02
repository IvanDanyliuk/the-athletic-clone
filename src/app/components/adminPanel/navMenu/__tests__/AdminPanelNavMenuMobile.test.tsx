import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AdminPanelNavMenuMobile } from '../';


const openMenu = () => {
  const menuBtn = screen.getByRole('button');
  fireEvent.click(menuBtn);
};

describe('AdminPanelNavMenuMobile tests', () => {
  beforeEach(() => {
    //eslint-disable-next-line
    render(
      <MemoryRouter>
        <AdminPanelNavMenuMobile />
      </MemoryRouter>
    );
    openMenu();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render a menu list after clicking on the menu button', () => {
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  test('should close the menu after clicking on the link', () => {
    const materialsLink = screen.getAllByRole('menuitem');
    fireEvent.click(materialsLink[0]);
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
});