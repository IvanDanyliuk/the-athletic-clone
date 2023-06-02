import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { articleToUpdate } from '../../../../utils/testing/testDataMocks/materials';
import { ContentMainArticle } from '../';


describe('ContentMainArticle tests', () => {
  test('should render the ContentMainArticle component with passed data', () => {
    render(
      <MemoryRouter>
        <ContentMainArticle article={articleToUpdate} />
      </MemoryRouter>
    );
    expect(screen.getByText(articleToUpdate.title)).toBeInTheDocument();
  });

  test('should render the ContentMainArticle component with passed null data', () => {
    render(
      <MemoryRouter>
        <ContentMainArticle article={null} />
      </MemoryRouter>
    );
    expect(screen.getByText('Article not found. Please, try to set the Main Article using the Content tab')).toBeInTheDocument();
  });
});