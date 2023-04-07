import { rest } from 'msw';
import { server } from './serverMock';
import { clubs } from '../testDataMocks/clubs';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const clubsSuccessHandlers = [
  rest.get(`${baseUrl}/clubs/country`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubs)
    );
  }),
];


export const setupClubsSuccessHandlers = () => {
  server.use(...clubsSuccessHandlers);
};