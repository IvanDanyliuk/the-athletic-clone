import { screen, fireEvent, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { Order } from '../../../../../../features/types';
import { CompetitionsTableHead } from '../';


const activeCellMock = {
  title: 'Country', 
  isSortable: true,
  sortKey: 'country',
  order: Order.asc
};

const onSortMock = jest.fn();

describe('CompetitionsTableHead tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', () => {
    renderWithProviders(
      <CompetitionsTableHead 
        activeCell={activeCellMock}
        onSort={onSortMock}
      />
    );

    const sortBtns = screen.getAllByTestId('ArrowDownwardIcon');
    fireEvent.click(sortBtns[0]);
    expect(onSortMock).toHaveBeenCalled();
  });
});