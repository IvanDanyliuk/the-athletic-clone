import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { postToUpdate } from '../../../utils/testing/testDataMocks/materials';
import { RealtimePosts } from '../';


const dataMock = [
  postToUpdate,
  postToUpdate,
  postToUpdate
];

describe('RealtimePosts tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <RealtimePosts materials={dataMock} />
      </MemoryRouter>
    );
    expect(screen.getAllByText(postToUpdate.author.name)).toHaveLength(dataMock.length);
  });
});