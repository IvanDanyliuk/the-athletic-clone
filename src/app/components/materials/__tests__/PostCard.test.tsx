import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { postToUpdate } from '../../../utils/testing/testDataMocks/materials';
import { userToUpdate } from '../../../utils/testing/testDataMocks/users';
import { IMaterial } from '../../../../features/materials/types';
import { PostCard } from '../';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));

const likedPostMock: IMaterial = {
  ...postToUpdate,
likes: [userToUpdate._id!]
}


describe('PostCard tests', () => {
  test('should call the dispatch function by clicking the like button if the post had been liked', async () => {
    renderWithProviders(<PostCard post={postToUpdate} user={userToUpdate} />);

    const likeBtn = screen.getByTestId('ThumbUpOutlinedIcon');
    fireEvent.click(likeBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should call the dispatch function by clicking the like button if the post had not been liked', async () => {
    renderWithProviders(
      <PostCard post={likedPostMock} user={userToUpdate} />,
    );

    const likeBtn = screen.getAllByTestId('ThumbUpOutlinedIcon');
    fireEvent.click(likeBtn[1]);
    
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});