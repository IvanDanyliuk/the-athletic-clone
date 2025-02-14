import { rest } from 'msw';
import { server } from './serverMock';
import { clubToUpdate, clubs, clubsStateErrorMock, clubsStateSuccessMock, newClub } from '../testDataMocks/clubs';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const clubsSuccessHandlers = [
  rest.get(`${baseUrl}/clubs/country`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubs)
    );
  }),
  rest.get(`${baseUrl}/clubs/${clubToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubToUpdate)
    );
  }),
  rest.get(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubsStateSuccessMock.data.main)
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
  rest.delete(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        clubs: clubsStateSuccessMock.data.main.clubs.slice(0, clubsStateSuccessMock.data.main.clubs.length - 1),
        clubsCount: 11
      })
    )
  })
];

const clubsErrorHandlers = [
  rest.get(`${baseUrl}/clubs/country`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Clubs By Country Error' })
    );
  }),
  rest.get(`${baseUrl}/clubs/${clubToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Club Error' })
    );
  }),
  rest.get(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Clubs Error' })
    );
  }),
  rest.post(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Create Club Error' })
    )
  }),
  rest.patch(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Club Error' })
    )
  }),
  rest.delete(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete Club Error' })
    )
  }),
];


export const setupClubsSuccessHandlers = () => {
  server.use(...clubsSuccessHandlers);
};

export const setupClubsErrorHandlers = () => {
  server.use(...clubsErrorHandlers);
};