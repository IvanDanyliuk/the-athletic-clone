import { rest } from 'msw';
import { server } from './serverMock';
import { playersStateSuccessMock,newPlayer, playerToUpdate } from '../testDataMocks/players';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const playersSuccessHandlers = [
  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(playersStateSuccessMock.data)
    );
  }),
  rest.post(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(newPlayer)
    )
  }),
  rest.patch(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(playerToUpdate)
    )
  }),
];

const playersErrorHandlers = [
  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    );
  }),
  rest.post(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
  rest.patch(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
];


export const setupPlayersSuccessHandlers = () => {
  server.use(...playersSuccessHandlers);
};

export const setupPlayersErrorHandlers = () => {
  server.use(...playersErrorHandlers);
};