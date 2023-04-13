import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
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
import MatchweekForm from '../MatchweekForm';


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


describe('MatchweekForm tests', () => {
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
              <MatchweekForm />
            </ScheduleContext.Provider>
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );

    const matchweekTitleField = screen.getByTestId('textField');
    fireEvent.change(matchweekTitleField, { target: { value: 'Matchweek 1' } });

    const submitBtn = screen.getByTestId('submitMwFormBtn');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(addMatchweekMock).toHaveBeenCalled();
    })
  });
});