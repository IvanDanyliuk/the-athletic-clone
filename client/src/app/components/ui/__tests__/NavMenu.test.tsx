import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavMenu } from '../';


const navLinks = [
  { url: 'materials', label: 'Materials' },
  { url: 'competitions', label: 'Competitions' },
  { url: 'clubs', label: 'Clubs' },
  { url: 'users', label: 'Users' },
  { url: 'players', label: 'Players' },
  { url: 'schedules', label: 'Schedules' },
  { url: 'content', label: 'Content' },
];

describe('AdminPanelNavMenu tests', () => {
  test('should render a menu list', () => {
    render(
      <MemoryRouter>
        <NavMenu links={navLinks} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(navLinks.length);
  });
});