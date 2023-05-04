import { screen, render } from '@testing-library/react';
import MaterialSecondaryInfo from '../MaterialSecondaryInfo';


describe('MaterialSecondaryInfo tests', () => {
  test('should render passed data', () => {
    render(
      <MaterialSecondaryInfo author='Test Author' views={7} />
    );
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
  });
});