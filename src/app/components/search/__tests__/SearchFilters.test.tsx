import { screen, render, fireEvent } from '@testing-library/react';
import { competitions } from '../../../utils/testing/testDataMocks/competitions';
import { SearchFilters } from '../';


const propsMock = {
  authors: [{ name: 'John Doe', userId: '63e8db447a8501b5b2a8428b'}, { name: 'Emily Clarks', userId: '63e8db447a8501b5b2a8430b' }],
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