import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MaterialsHeader } from '../';


describe('MaterialsHeader tests', () => {
  beforeEach(() => {
    //eslint-disable-next-line
    render(
      <MemoryRouter>
        <MaterialsHeader />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should open the menu after clicking the button', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  test('should render the MaterialsHeader component', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const link = screen.getByRole('link', { name: /Note/ });
    fireEvent.click(link);
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});