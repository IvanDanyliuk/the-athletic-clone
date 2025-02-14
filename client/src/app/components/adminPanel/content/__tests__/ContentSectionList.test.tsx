import { screen } from '@testing-library/react';
import { contentStateSuccessMock } from '../../../../utils/testing/testDataMocks/content';
import { renderWithProviders } from '../../../../utils/testing/customRenderMethod';
import { ContentSectionsList } from '../';


describe('ContentSectionList tests', () => {
  test('should render the ContentSectionList component', async () => {
    renderWithProviders(
      <ContentSectionsList sections={contentStateSuccessMock.content} />
    );
    const contentSections = screen.getAllByTestId('contentSectionListItem');
    expect(contentSections).toHaveLength(contentStateSuccessMock.content.length);
  });
});