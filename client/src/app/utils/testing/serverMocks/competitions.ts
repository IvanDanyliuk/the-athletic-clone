import { rest } from 'msw';
import { server } from './serverMock';
import { competitionToUpdate, competitionsStateSuccessMock, newCompetition } from '../testDataMocks/competitions';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const competitionsSuccessHandlers = [
  rest.get(`${baseUrl}/competitions/all`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(competitionsStateSuccessMock.data.main)
    );
  }),
  rest.get(`${baseUrl}/competitions/${competitionToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(competitionToUpdate)
    );
  }),
  rest.get(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(competitionsStateSuccessMock.data.main)
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
  rest.delete(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(competitionsStateSuccessMock.data.main)
    );
  }),
];

const competitionsErrorHandlers = [
  rest.get(`${baseUrl}/competitions/all`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get All Competitions Error' })
    );
  }),
  rest.get(`${baseUrl}/competitions/${competitionToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Competition Error' })
    );
  }),
  rest.get(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Competitions Error' })
    );
  }),
  rest.post(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Create Competition Error' })
    );
  }),
  rest.patch(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Competition Error' })
    );
  }),
  rest.delete(`${baseUrl}/competitions`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete Competition Error' })
    );
  }),
];


export const setupCompetitionsSuccessHandlers = () => {
  server.use(...competitionsSuccessHandlers);
};

export const setupCompetitionsErrorHandlers = () => {
  server.use(...competitionsErrorHandlers);
};