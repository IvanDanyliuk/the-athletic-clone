import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupUsersSuccessHandlers } from '../../../../../utils/testing/serverMocks/users';
import { UsersTableFooter } from '../';


const onPageChangeMock = jest.fn();

describe('UsersTableFooter tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the onPageChange handler after clicking on the arrow button', () => {
    renderWithProviders(
      <UsersTableFooter 
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