import { rest } from 'msw';
import { server } from './serverMock';
import { schedulesStateSuccessMock, newSchedule, scheduleToUpdate } from '../testDataMocks/schedules';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const schedulesSuccessHandlers = [
  rest.get(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(schedulesStateSuccessMock.data)
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

const schedulesErrorHandlers = [
  rest.get(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    );
  }),
  rest.post(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
  rest.patch(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
];


export const setupSchedulesSuccessHandlers = () => {
  server.use(...schedulesSuccessHandlers);
};

export const setupSchedulesErrorHandlers = () => {
  server.use(...schedulesErrorHandlers);
};