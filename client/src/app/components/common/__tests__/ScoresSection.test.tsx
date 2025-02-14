import { screen, render } from '@testing-library/react';
import ScoresSection from '../ScoresSection';
import { latestMatechesMock } from '../../../utils/testing/testDataMocks/schedules';


describe('ScoresSection tests', () => {
  test('should render passed data', () => {
    render(<ScoresSection matches={latestMatechesMock} />);
    expect(screen.getAllByText(latestMatechesMock[0].league)).toBeTruthy();
  });
});