import { screen, render } from '@testing-library/react';
import BackdropLoader from '../BackdropLoader';


describe('BackdropLoader tests', () => {
  test('should render the component if the open prop equals to true', () => {
    render(<BackdropLoader open={true} />);
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});