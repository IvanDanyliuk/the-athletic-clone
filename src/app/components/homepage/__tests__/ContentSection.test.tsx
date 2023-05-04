import { screen, render } from '@testing-library/react';
import ContentSection from '../ContentSection';
import { contentSection } from '../../../utils/testing/testDataMocks/content';
import { BrowserRouter } from 'react-router-dom';


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