import { screen, render } from '@testing-library/react';
import { SearchItem } from '../';


describe('SearchItem tests', () => {
  test('should render passed data', () => {
    render(
      <SearchItem 
        image='https://www.storage.com/images/image_1.png' 
        label='Item' 
        altText='Item Alt Text' 
      />
    );
    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});