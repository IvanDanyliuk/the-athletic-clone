import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavMenuMobile } from '../';


const navLinks = [
  { url: 'materials', label: 'Materials' },
  { url: 'competitions', label: 'Competitions' },
  { url: 'clubs', label: 'Clubs' },
  { url: 'users', label: 'Users' },
  { url: 'players', label: 'Players' },
  { url: 'schedules', label: 'Schedules' },
  { url: 'content', label: 'Content' },
];

const openMenu = () => {
  const menuBtn = screen.getByRole('button');
  fireEvent.click(menuBtn);
};

describe('AdminPanelNavMenuMobile tests', () => {
  beforeEach(() => {
    //eslint-disable-next-line
    render(
      <MemoryRouter>
        <NavMenuMobile links={navLinks} />
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