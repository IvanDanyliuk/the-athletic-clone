import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import { leagueMaterialsPropsMock } from '../../../utils/testing/testDataMocks/content';
import { LeagueMaterials } from '../';


describe('LeagueMaterials tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <LeagueMaterials 
          materials={leagueMaterialsPropsMock} 
          leaguesNumToShow={2} 
        />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Premier League/)).toHaveLength(2);
  });
});