import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupPlayersSuccessHandlers } from '../../../../../utils/testing/serverMocks/players';
import { PlayersTableFooter } from '../';


const onPageChangeMock = jest.fn();

describe('PlayersTableFooter tests', () => {
  beforeEach(() => {
    setupPlayersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the onPageChange handler after clicking on the arrow button', () => {
    renderWithProviders(
      <PlayersTableFooter 
        page={0}
        pageCount={12}
        onPageChange={onPageChangeMock}
      />
    );
    
    const arrowRightBtn = screen.getByTestId('KeyboardArrowRightIcon');
    fireEvent.click(arrowRightBtn);
    expect(onPageChangeMock).toHaveBeenCalled();
  });
});