import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import SchedulesTableFooter from '../SchedulesTableFooter';


const onPageChangeMock = jest.fn();

describe('SchedulesTableFooter tests', () => {
  beforeEach(() => {
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the onPageChange handler after clicking on the arrow button', () => {
    renderWithProviders(
      <SchedulesTableFooter 
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