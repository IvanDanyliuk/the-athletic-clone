import { render, screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { store } from '../../../../../../features/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ScheduleContext from '../../../../../context/scheduleContext';
import { scheduleToUpdate } from '../../../../../utils/testing/testDataMocks/schedules';
import { ScheduleContextType } from '../../../../../context/scheduleContext';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import MatchForm from '../MatchForm';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));

const addScheduleTitleMock = jest.fn();
const addMatchweekMock = jest.fn();
const addMatchMock = jest.fn();
const deleteMatchweekMock = jest.fn();
const deleteMatchMock = jest.fn();

const value: ScheduleContextType = {
  schedule: scheduleToUpdate,
  isUpdatingMode: false,
  addScheduleTitle: addScheduleTitleMock,
  addMatchweek: addMatchweekMock, 
  addMatch: addMatchMock,
  deleteMatchweek: deleteMatchweekMock,
  deleteMatch: deleteMatchMock,
};


describe('UserForm tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ScheduleContext.Provider value={value}>
              <MatchForm mwId='881ae563-d76c-4d3b-bbe2-14d1144ba390' />
            </ScheduleContext.Provider>
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );

    const openFormBtn = screen.getByTestId('openMatchFormBtn');
    fireEvent.click(openFormBtn);

    const teamsFields = screen.getAllByTestId('selectField');
    const textFields = screen.getAllByTestId('textField');
    const submitBtn = screen.getByTestId('submitAddMatchBtn');

    //eslint-disable-next-line
    fireEvent.change(teamsFields[0].querySelector('input')!, { target: { value: '6419a26d6e0212a0462b4dd2' } });
    //eslint-disable-next-line
    fireEvent.change(teamsFields[1].querySelector('input')!, { target: { value: '6419f57b1f12d2111b413ffc' } });
    fireEvent.change(textFields[0], { target: { value: '3:0' } });
    fireEvent.change(textFields[0], { target: { value: 'Emirates Stadium' } });
    fireEvent.click(submitBtn);
    
    expect(submitBtn).toBeInTheDocument();
  });
});