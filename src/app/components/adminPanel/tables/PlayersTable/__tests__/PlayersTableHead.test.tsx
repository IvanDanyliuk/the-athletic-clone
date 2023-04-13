import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupPlayersSuccessHandlers } from '../../../../../utils/testing/serverMocks/players';
import PlayersTableHead from '../PlayersTableHead';
import { Order } from '../../../../../../features/players/types';


const activeCellMock = {
  title: 'Country', 
  isSortable: true,
  sortKey: 'country',
  order: Order.asc
};

const onSortMock = jest.fn();

describe('PlayersTableHead tests', () => {
  beforeEach(() => {
    setupPlayersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', () => {
    renderWithProviders(
      <PlayersTableHead 
        activeCell={activeCellMock}
        onSort={onSortMock}
      />
    );

    const sortBtns = screen.getAllByTestId('ArrowDownwardIcon');
    fireEvent.click(sortBtns[0]);
    expect(onSortMock).toHaveBeenCalled();
  });
});