import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/testing/customRenderMethod';
import { contentStateSuccessMock } from '../../../../utils/testing/testDataMocks/content';
import Content from '../Content';


describe('Content tests', () => {
  test('should render the Content component', async () => {
    renderWithProviders(
      <Content />
    );
    const contentSections = screen.getAllByTestId('contentSectionListItem');
    expect(contentSections).toHaveLength(contentStateSuccessMock.content.length);
  });
});