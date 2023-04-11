import { rest } from 'msw';
import { server } from './serverMock';
import { playersStateMock,newPlayer, playerToUpdate } from '../testDataMocks/players';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const playersSuccessHandlers = [
  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(playersStateMock.data)
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


export const setupPlayersSuccessHandlers = () => {
  server.use(...playersSuccessHandlers);
};