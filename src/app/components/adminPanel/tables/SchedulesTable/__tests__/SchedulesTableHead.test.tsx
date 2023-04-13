import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import SchedulesTableHead from '../SchedulesTableHead';
import { Order } from '../../../../../../features/schedules/types';


const activeCellMock = {
  title: 'Type', 
  isSortable: true,
  sortKey: 'type',
  order: Order.asc
};

const onSortMock = jest.fn();

describe('SchedulesTableHead tests', () => {
  beforeEach(() => {
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', () => {
    renderWithProviders(
      <SchedulesTableHead 
        activeCell={activeCellMock}
        onSort={onSortMock}
      />
    );

    const sortBtns = screen.getAllByTestId('ArrowDownwardIcon');
    fireEvent.click(sortBtns[0]);
    expect(onSortMock).toHaveBeenCalled();
  });
});