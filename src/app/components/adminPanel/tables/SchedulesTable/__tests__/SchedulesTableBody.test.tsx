import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import { schedulesStateSuccessMock } from '../../../../../utils/testing/testDataMocks/schedules';
import SchedulesTableBody from '../SchedulesTableBody';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('SchedulesTableBody tests', () => {
  beforeEach(() => {
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the delete button and submiting the club deleting', async () => {
    renderWithProviders(
      <SchedulesTableBody 
        page={0} 
        itemsPerPage={10} 
        schedules={schedulesStateSuccessMock.data.schedules.slice(0, 2)} 
      />
    );

    const actionBtns = screen.getAllByTestId('rowActionBtn');
    fireEvent.click(actionBtns[1]);
    
    //eslint-disable-next-line
    await act(async () => {
      const deleteBtn = screen.getByText(/Delete/);
      fireEvent.click(deleteBtn);
    });

    const acceptBtn = screen.getByText(/Yes/);
    fireEvent.click(acceptBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});