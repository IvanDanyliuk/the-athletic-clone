import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BtnMenuMobile } from '../';
import { competitionsStateSuccessMock } from '../../../utils/testing/testDataMocks/competitions';


describe('BtnMenu tests', () => {
  beforeEach(() => {
    //eslint-disable-next-line
    render(
      <BrowserRouter>
        <BtnMenuMobile links={competitionsStateSuccessMock.data.main.competitions.slice(0, 1)} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should open the menu after clickin the open button', () => {
    const menuBtn = screen.getByRole('button');
    fireEvent.click(menuBtn);
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  test('should close the menu after clickin the open button', () => {
    const menuBtn = screen.getByRole('button');
    fireEvent.click(menuBtn);

    const drawer = screen.getByRole('presentation');
    fireEvent.click(drawer);
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});