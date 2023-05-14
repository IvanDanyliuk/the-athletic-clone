import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SubscribeSection from '../SubscribeSection';


describe('SubscribeSection tests', () => {
  test('should render the subscription message', () => {
    render(
      <BrowserRouter>
        <SubscribeSection />
      </BrowserRouter>
    );
    expect(screen.getByText(/Access sports reporting that sets the standard./)).toBeInTheDocument();
  });
});