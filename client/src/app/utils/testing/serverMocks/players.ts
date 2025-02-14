import { rest } from 'msw';
import { server } from './serverMock';
import { playersStateSuccessMock,newPlayer, playerToUpdate } from '../testDataMocks/players';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const playersSuccessHandlers = [
  rest.get(`${baseUrl}/players/${playerToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(playerToUpdate)
    );
  }),
  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(playersStateSuccessMock.data.main)
    );
  }),
  rest.post(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(newPlayer)
    )
  }),
  rest.patch(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(playerToUpdate)
    )
  }),
  rest.delete(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(204),
    )
  }),
];

const playersErrorHandlers = [
  rest.get(`${baseUrl}/players/${playerToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Player Error' })
    );
  }),
  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Players Error' })
    );
  }),
  rest.post(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Create Player Error' })
    )
  }),
  rest.patch(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Player Error' })
    )
  }),
  rest.delete(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete Player Error' })
    )
  }),
];


export const setupPlayersSuccessHandlers = () => {
  server.use(...playersSuccessHandlers);
};

export const setupPlayersErrorHandlers = () => {
  server.use(...playersErrorHandlers);
};