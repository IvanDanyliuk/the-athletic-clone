import { screen, render } from '@testing-library/react';
import { MaterialSecondaryInfo } from '../';


describe('MaterialSecondaryInfo tests', () => {
  test('should render passed data', () => {
    render(
      <MaterialSecondaryInfo author='Test Author' commentsNum={7} />
    );
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
  });
});