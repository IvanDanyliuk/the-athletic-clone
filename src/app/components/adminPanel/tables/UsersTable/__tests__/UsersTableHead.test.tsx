import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupUsersSuccessHandlers } from '../../../../../utils/testing/serverMocks/users';
import UsersTableHead from '../UsersTableHead';
import { Order } from '../../../../../../features/users/types';


const activeCellMock = {
  title: 'Type', 
  isSortable: true,
  sortKey: 'type',
  order: Order.asc
};

const onSortMock = jest.fn();

describe('UsersTableHead tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', () => {
    renderWithProviders(
      <UsersTableHead 
        activeCell={activeCellMock}
        onSort={onSortMock}
      />
    );

    const sortBtns = screen.getAllByTestId('ArrowDownwardIcon');
    fireEvent.click(sortBtns[0]);
    expect(onSortMock).toHaveBeenCalled();
  });
});