import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { contentSection } from '../../../utils/testing/testDataMocks/content';
import { ContentSectionMaterials } from '../';


describe('ContentSection tests', () => {
  test('should render passed data', () => {
    render(
      <BrowserRouter>
        <ContentSectionMaterials materials={contentSection.materials} />
      </BrowserRouter>
    );
    expect(screen.getByText(contentSection.materials[0].title)).toBeInTheDocument();
  });
});