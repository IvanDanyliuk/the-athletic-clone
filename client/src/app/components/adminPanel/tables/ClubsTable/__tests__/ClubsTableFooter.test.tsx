import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { ClubsTableFooter } from '../';


const onPageChangeMock = jest.fn();

describe('ClubsTableFooter tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the onPageChange handler after clicking on the arrow button', () => {
    renderWithProviders(
      <ClubsTableFooter 
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