import { rest } from 'msw';
import { server } from './serverMock';
import { clubToUpdate, clubs, newClub } from '../testDataMocks/clubs';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const clubsSuccessHandlers = [
  rest.get(`${baseUrl}/clubs/country`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubs)
    );
  }),
  rest.post(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(newClub)
    )
  }),
  rest.patch(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubToUpdate)
    )
  }),
];


export const setupClubsSuccessHandlers = () => {
  server.use(...clubsSuccessHandlers);
};