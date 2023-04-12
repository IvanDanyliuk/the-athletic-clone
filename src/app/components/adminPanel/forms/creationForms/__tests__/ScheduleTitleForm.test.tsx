import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { store } from '../../../../../../features/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ScheduleContext from '../../../../../context/scheduleContext';
import { newSchedule } from '../../../../../utils/testing/testDataMocks/schedules';
import { ScheduleContextType } from '../../../../../context/scheduleContext';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import ScheduleTitleForm from '../ScheduleTitleForm';


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
  schedule: newSchedule,
  isUpdatingMode: true,
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
              <ScheduleTitleForm />
            </ScheduleContext.Provider>
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );

    const competitionSeletField = screen.getByTestId('selectField');
    const seasonTitleField = screen.getByTestId('textField');
    const nextBtn = screen.getByRole('button', { name: /Update/ });

    //eslint-disable-next-line
    fireEvent.change(competitionSeletField.querySelector('input')!, { target: { value: 'Premier League' } });
    fireEvent.change(seasonTitleField, { target: { value: '2022/2023' } });
    fireEvent.click(nextBtn);

    await waitFor(() => {
      expect(addScheduleTitleMock).toHaveBeenCalled()
    });
  });
});