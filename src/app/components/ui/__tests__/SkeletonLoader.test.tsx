import { screen, render } from '@testing-library/react';
import { SkeletonLoader } from '../';


describe('SkeletonLoader tests', () => {
  test('should render the component: section variant', () => {
    render(<SkeletonLoader variant='section' />);
    expect(screen.getByTestId('skeletonLoader')).toBeInTheDocument();
  });

  test('should render the component: list variant', () => {
    render(<SkeletonLoader variant='list' />);
    expect(screen.getByTestId('skeletonLoader')).toBeInTheDocument();
  });
  
  test('should render the component: row variant', () => {
    render(<SkeletonLoader variant='row' />);
    expect(screen.getByTestId('skeletonLoader')).toBeInTheDocument();
  });
});