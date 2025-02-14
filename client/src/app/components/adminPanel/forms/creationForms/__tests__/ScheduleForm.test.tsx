import { render, screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ScheduleContext from '../../../../../context/scheduleContext';
import { newSchedule, scheduleToUpdate } from '../../../../../utils/testing/testDataMocks/schedules';
import { ScheduleContextType } from '../../../../../context/scheduleContext';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { store } from '../../../../../../features/store';
import { ISchedule } from '../../../../../../features/schedules/types';
import { ScheduleForm } from '../';


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

const renderScheduleForm = (updationData?: ISchedule) => {
  const value: ScheduleContextType = {
    schedule: newSchedule,
    isUpdatingMode: false,
    addScheduleTitle: addScheduleTitleMock,
    addMatchweek: addMatchweekMock, 
    addMatch: addMatchMock,
    deleteMatchweek: deleteMatchweekMock,
    deleteMatch: deleteMatchMock,
  };

  if(updationData) {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ScheduleContext.Provider value={value}>
              <ScheduleForm scheduleToUpdate={updationData} />
            </ScheduleContext.Provider>
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );
  } else {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ScheduleContext.Provider value={value}>
              <ScheduleForm />
            </ScheduleContext.Provider>
          </LocalizationProvider>
        </Provider>
      </MemoryRouter>
    );
  }
};

describe('ScheduleForm tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the ScheduleForm after passing data', async () => {
    renderScheduleForm();

    const selectFields = screen.getAllByTestId('selectField');
    //eslint-disable-next-line
    fireEvent.change(selectFields[0].querySelector('input')!, { target: { value: 'Premier League' } });

    const seasonTitleField = screen.getByLabelText(/Season/);
    fireEvent.change(seasonTitleField, { target: { value: '2022/2023' } });

    const nextBtn = screen.getByRole('button', { name: /Next/ });
    fireEvent.click(nextBtn);
    
    const matchweekTitleField = screen.getByLabelText(/Matchweek Title/);
    fireEvent.change(matchweekTitleField, { target: { value: 'Matchweek 1' } });

    const addMatchweekBtn = screen.getByText(/Add/);
    fireEvent.click(addMatchweekBtn);

    const createBtn = screen.getByRole('button', { name: /Create/ });
    fireEvent.click(createBtn);

    await waitFor(() => {
      expect(screen.queryByText(/Go Back/)).not.toBeInTheDocument();
    });
  });

  test('should submit the updation ScheduleForm after passing data', async () => {
    renderScheduleForm(scheduleToUpdate);

    const selectFields = screen.getAllByTestId('selectField');
    //eslint-disable-next-line
    fireEvent.change(selectFields[0].querySelector('input')!, { target: { value: 'Premier League' } });

    const seasonTitleField = screen.getByLabelText(/Season/);
    fireEvent.change(seasonTitleField, { target: { value: '2022/2023' } });

    const createBtns = screen.getAllByRole('button', { name: /Update/ });
    fireEvent.click(createBtns[0]);
    
    const matchweekTitleField = screen.getByLabelText(/Matchweek Title/);
    fireEvent.change(matchweekTitleField, { target: { value: 'Matchweek 3' } });

    const addMatchweekBtn = screen.getByRole('button', { name: /Add/ });
    fireEvent.click(addMatchweekBtn);
    
    //eslint-disable-next-line
    await act(async () => {
      const deleteMatchweekBtn = screen.getAllByText(/Delete Matchweek/);
      fireEvent.click(deleteMatchweekBtn[1]);
    });
    
    //eslint-disable-next-line
    await act(async () => {
      fireEvent.click(createBtns[1]);
    });

    await waitFor(() => {
      expect(screen.queryByText(/Go Back/)).not.toBeInTheDocument();
    });
  });
});