import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SubPageHeader } from '../';


describe('SubPageHeader tests', () => {
  test('should render the component', () => {
    render(
      <MemoryRouter>
        <SubPageHeader 
          title='Test Title' 
          link='/test-link' 
        />
      </MemoryRouter>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});