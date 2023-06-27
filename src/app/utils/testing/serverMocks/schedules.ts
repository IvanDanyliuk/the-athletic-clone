import { rest } from 'msw';
import { server } from './serverMock';
import { schedulesStateSuccessMock, newSchedule, scheduleToUpdate, latestMatechesMock } from '../testDataMocks/schedules';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const schedulesSuccessHandlers = [
  rest.get(`${baseUrl}/schedules/by-club`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(schedulesStateSuccessMock.data.main)
    );
  }),
  rest.get(`${baseUrl}/schedules/recent-matches`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(latestMatechesMock)
    );
  }),
  rest.get(`${baseUrl}/schedules/schedule`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(scheduleToUpdate)
    );
  }),
  rest.get(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(schedulesStateSuccessMock.data.main)
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
  rest.delete(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(schedulesStateSuccessMock.data.main)
    )
  }),
];

const schedulesErrorHandlers = [
  rest.get(`${baseUrl}/schedules/by-club`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Schedules By Club Error' })
    );
  }),
  rest.get(`${baseUrl}/schedules/recent-matches`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Recent Matches Error' })
    );
  }),
  rest.get(`${baseUrl}/schedules/schedule`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Schedule Error' })
    );
  }),
  rest.get(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Schedules Error' })
    );
  }),
  rest.post(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Create Schedule Error' })
    )
  }),
  rest.patch(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Schedule Error' })
    )
  }),
  rest.delete(`${baseUrl}/schedules`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete Schedule Error' })
    )
  }),
];


export const setupSchedulesSuccessHandlers = () => {
  server.use(...schedulesSuccessHandlers);
};

export const setupSchedulesErrorHandlers = () => {
  server.use(...schedulesErrorHandlers);
};