import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { Navigation } from '../';
import { BrowserRouter } from 'react-router-dom';
import { competitionsStateSuccessMock } from '../../../utils/testing/testDataMocks/competitions';


describe('Navigation tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navigation links={competitionsStateSuccessMock.data.main.competitions} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should open the navigation menu', () => {
    const menuItem = screen.getAllByText('Premier League');
    fireEvent.mouseEnter(menuItem[0]);
    expect(screen.getByText('Arsenal')).toBeInTheDocument();
  });

  test('should close the navigation menu', () => {
    const menuItem = screen.getAllByText('Premier League');
    fireEvent.mouseEnter(menuItem[0]);
    
    const dropdownMenu = screen.getByTestId('dropdownMenu');
    fireEvent.mouseLeave(dropdownMenu);
    expect(screen.queryByText('Arsenal')).not.toBeInTheDocument();
  });
});