import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RowActionButtons } from '../';
import { EssenseType } from '../../../../models/components';


const setMainArticle = jest.fn();
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

describe('RowActionButtons tests: Materials Table case', () => {
  test('should call the onSetMainArticle handler function after clicking the Set as Main button', async () => {
    render(
      <MemoryRouter>
        <RowActionButtons 
          id='test_id' 
          type={EssenseType.materials} 
          materialType='article'
          onSetMainArticle={setMainArticle}
          onDelete={deleteFunc} 
        />
      </MemoryRouter>
    );
    openMenu();
    const setMainArticleBtn = screen.getByText(/Set as Main/);
    fireEvent.click(setMainArticleBtn);
    expect(setMainArticle).toHaveBeenCalled();
  });
});