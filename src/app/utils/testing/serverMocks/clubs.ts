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
  rest.get(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clubsStateSuccessMock.data)
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
      ctx.json(clubsStateSuccessMock.data)
    )
  })
];

const clubsErrorHandlers = [
  rest.get(`${baseUrl}/clubs/country`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    );
  }),
  rest.get(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json(clubsStateErrorMock.data)
    );
  }),
  rest.post(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
  rest.patch(`${baseUrl}/clubs`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
]


export const setupClubsSuccessHandlers = () => {
  server.use(...clubsSuccessHandlers);
};

export const setupClubsErrorHandlers = () => {
  server.use(...clubsErrorHandlers);
};