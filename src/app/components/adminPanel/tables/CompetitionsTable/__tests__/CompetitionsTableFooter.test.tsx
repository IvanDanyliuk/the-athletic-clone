import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import CompetitionsTableFooter from '../CompetitionsTableFooter';


const onPageChangeMock = jest.fn();

describe('CompetitionsTableFooter tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the onPageChange handler after clicking on the arrow button', () => {
    renderWithProviders(
      <CompetitionsTableFooter 
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