import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { contentSection } from '../../../utils/testing/testDataMocks/content';
import { ContentSection } from '../';



describe('ContentSection tests', () => {
  test('should render passed data', () => {
    render(
      <BrowserRouter>
        <ContentSection data={contentSection} />
      </BrowserRouter>
    );
    expect(screen.getByText(contentSection.name)).toBeInTheDocument();
  });
});