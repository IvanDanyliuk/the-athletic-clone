import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { Order } from '../../../../../../features/clubs/types';
import { ClubsTableHead } from '../';


const activeCellMock = {
  title: 'Country', 
  isSortable: true,
  sortKey: 'country',
  order: Order.asc
};

const onSortMock = jest.fn();

describe('ClubsTableHead tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', () => {
    renderWithProviders(
      <ClubsTableHead 
        activeCell={activeCellMock}
        onSort={onSortMock}
      />
    );

    const sortBtns = screen.getAllByTestId('ArrowDownwardIcon');
    fireEvent.click(sortBtns[0]);
    expect(onSortMock).toHaveBeenCalled();
  });
});