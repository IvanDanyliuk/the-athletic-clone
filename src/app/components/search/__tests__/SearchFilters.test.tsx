import { screen, render, fireEvent } from '@testing-library/react';
import { SearchFilters } from '../';
import { competitions } from '../../../utils/testing/testDataMocks/competitions';


const propsMock = {
  authors: ['John Doe', 'Emily Clarks'],
  leagues: competitions,
  checkedLabels: ['John Doe'],
  onSetFilterData: jest.fn()
}

describe('SearchFilters tests', () => {
  test('should call the set filters function by checking a particular filter item', () => {
    render(
      <SearchFilters 
        authors={propsMock.authors} 
        leagues={propsMock.leagues} 
        checkedLabels={propsMock.checkedLabels} 
        onSetFilterData={propsMock.onSetFilterData} 
      />
    );
    
    const authorCheckbox = screen.getByText('John Doe');
    fireEvent.click(authorCheckbox);

    expect(propsMock.onSetFilterData).toHaveBeenCalled();
  });
});