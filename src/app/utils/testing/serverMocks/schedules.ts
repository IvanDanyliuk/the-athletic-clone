import { rest } from 'msw';
import { server } from './serverMock';
import { schedulesStateMock, newSchedule, scheduleToUpdate } from '../testDataMocks/schedules';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const schedulesSuccessHandlers = [
  rest.get(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(schedulesStateMock.data)
    );
  }),
  rest.post(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(newSchedule)
    )
  }),
  rest.patch(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(scheduleToUpdate)
    )
  }),
];


export const setupSchedulesSuccessHandlers = () => {
  server.use(...schedulesSuccessHandlers);
};