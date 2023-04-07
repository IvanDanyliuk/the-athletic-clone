import { rest } from 'msw';
import { server } from './serverMock';
import { competitions } from '../testDataMocks/competitions';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const competitionsSuccessHandlers = [
  rest.get(`${baseUrl}/competitions/all`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(competitions)
    );
  }),
];


export const setupCompetitionsSuccessHandlers = () => {
  server.use(...competitionsSuccessHandlers);
};