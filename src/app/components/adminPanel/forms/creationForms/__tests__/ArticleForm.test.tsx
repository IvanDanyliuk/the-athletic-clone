import { render, screen, act, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import ArticleForm from '../ArticleForm';
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../../../../features/store';
import { MemoryRouter } from 'react-router-dom';
import { articleToUpdate } from '../../../../../utils/testing/testDataMocks/materials';
// import { act } from 'react-dom/test-utils';


describe('ArticleForm tests', () => {
  beforeAll(() => {
    setupMaterialsSuccessHandlers();
  });

  test('should render the form', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ArticleForm articleToUpdate={articleToUpdate} />
        </MemoryRouter>
      </Provider>
    )

    

    screen.debug(undefined, 300000)
  });
});