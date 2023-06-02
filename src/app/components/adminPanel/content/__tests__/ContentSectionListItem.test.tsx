import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/testing/customRenderMethod';
import { contentSection } from '../../../../utils/testing/testDataMocks/content';
import { ContentSectionListItem } from '../';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));

describe('ContentSectionListItem tests', () => {
  test('should call a dispatch method by clicking the Delete button', async () => {
    renderWithProviders(
      <ContentSectionListItem data={contentSection} />
    );

    const closeBtn = screen.getByTestId('closeBtn');
    fireEvent.click(closeBtn);
    const acceptBtn = screen.getByTestId('acceptBtn');
    fireEvent.click(acceptBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});