import { rest } from 'msw';
import { server } from './serverMock';
import { competitionToUpdate, getAllCompetitionsResponseMock, newCompetition } from '../testDataMocks/competitions';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const competitionsSuccessHandlers = [
  rest.get(`${baseUrl}/competitions/all`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(getAllCompetitionsResponseMock)
    );
  }),
  rest.post(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(newCompetition)
    );
  }),
  rest.patch(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(competitionToUpdate)
    );
  }),
];


export const setupCompetitionsSuccessHandlers = () => {
  server.use(...competitionsSuccessHandlers);
};