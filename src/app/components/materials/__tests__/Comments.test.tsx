import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { postToUpdate } from '../../../utils/testing/testDataMocks/materials';
import { userToUpdate } from '../../../utils/testing/testDataMocks/users';
import { setupMaterialsSuccessHandlers } from '../../../utils/testing/serverMocks/materials';
import { setupUsersSuccessHandlers } from '../../../utils/testing/serverMocks/users';
import Comments from '../Comments';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('Comments tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch function after submitting the comment creation form', async () => {
    renderWithProviders(
      <Comments 
        material={postToUpdate} 
        user={userToUpdate} 
      />
    );
    const commentField = screen.getByTestId('textField');
    fireEvent.change(commentField, { target: { value: 'This is my comment!' } });
    const submitBtn = screen.getByRole('button', { name: 'Comment' });
    fireEvent.click(submitBtn);
    
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should call the dispatch function after submitting the comment edit form', async () => {
    renderWithProviders(
      <Comments 
        material={postToUpdate} 
        user={userToUpdate} 
      />
    );
    const editBtn = screen.getByTestId('EditIcon');
    fireEvent.click(editBtn);

    await waitFor(() => {
      const commentField = screen.getByTestId('textField');
      //eslint-disable-next-line
      fireEvent.change(commentField, { target: { value: 'This is my comment!' } });
    });

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);
    
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should call the dispatch function after clicking the delete button', async () => {
    renderWithProviders(
      <Comments 
        material={postToUpdate} 
        user={userToUpdate} 
      />
    );
    
    const submitBtn = screen.getByTestId('CloseIcon');
    fireEvent.click(submitBtn);
    
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should render the text message if the material data has not been passed', async () => {
    renderWithProviders(
      <Comments 
        material={{ ...postToUpdate, comments: [] }} 
        user={userToUpdate} 
      />
    );
    
    expect(screen.getByText('Leave your comment')).toBeInTheDocument();
  });
});