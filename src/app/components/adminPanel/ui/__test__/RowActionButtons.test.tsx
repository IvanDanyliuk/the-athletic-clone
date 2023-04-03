import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RowActionButtons, { EssenseType } from '../RowActionButtons';


const deleteFunc = jest.fn();

const openMenu = () => {
  const menuBtn = screen.getByRole('button');
  fireEvent.click(menuBtn);
};

describe('RowActionButtons tests', () => {
  beforeEach(() => {
    //eslint-disable-next-line
    render(
      <MemoryRouter>
        <RowActionButtons 
          id='test_id' 
          type={EssenseType.materials} 
          onDelete={deleteFunc} 
        />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should open the menu after clicking a button', () => {
    openMenu();
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  test('should close the menu after clicking the Edit button', () => {
    openMenu();
    const deleteBtn = screen.getByText(/Delete/);
    fireEvent.click(deleteBtn);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  test('should call the delete handler function after clicking the Delete button and confirming deleting', () => {
    openMenu();
    const deleteBtn = screen.getByText(/Delete/);
    fireEvent.click(deleteBtn);
    const confirmBtn = screen.getByRole('button', { name: /Yes/ });
    fireEvent.click(confirmBtn);
    expect(deleteFunc).toHaveBeenCalled();
  });

  test('should not call the delete handler function after clicking the Delete button and not confirming deleting', () => {
    openMenu();
    const deleteBtn = screen.getByText(/Delete/);
    fireEvent.click(deleteBtn);
    const confirmBtn = screen.getByRole('button', { name: /No/ });
    fireEvent.click(confirmBtn);
    expect(deleteFunc).not.toHaveBeenCalled();
  });
});