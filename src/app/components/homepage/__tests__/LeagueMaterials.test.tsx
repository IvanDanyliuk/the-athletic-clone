import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import LeagueMaterials from '../LeagueMaterials';
import { leagueMaterialsPropsMock } from '../../../utils/testing/testDataMocks/content';


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