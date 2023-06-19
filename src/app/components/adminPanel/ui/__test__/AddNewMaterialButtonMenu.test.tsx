import { screen, render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { AddNewMaterialButtonMenu } from '../';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';


const propsMock = [
  { url: '/new-article', label: 'Article' },
  { url: '/new-note', label: 'Note' },
  { url: '/new-post', label: 'Realtime Post' },
]

describe('AddNewMaterialButtonMenu tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AddNewMaterialButtonMenu links={propsMock} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should open the menu after clicking the add icon', () => {
    const openMenuBtn = screen.getByTestId('AddIcon');
    fireEvent.click(openMenuBtn);
    expect(screen.getAllByRole('link')).toHaveLength(propsMock.length);
  });

  test('should close the menu after clicking the menu item', () => {
    const openMenuBtn = screen.getByTestId('AddIcon');
    fireEvent.click(openMenuBtn);

    const menuItem = screen.getByText('Article');
    fireEvent.click(menuItem);

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
});