import { rest } from 'msw';
import { server } from './serverMock';
import { contentSection, contentStateSuccessMock } from '../testDataMocks/content';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const contentSuccessHandlers = [
  rest.get(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(contentStateSuccessMock.content)
    );
  }),
  rest.post(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(contentSection)
    );
  }),
  rest.patch(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(contentSection)
    );
  }),
];

const contentErrorHandlers = [
  rest.post(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    );
  }),
  rest.patch(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    );
  }),
];


export const setupContentSuccessHandlers = () => {
  server.use(...contentSuccessHandlers);
};

export const setupContentErrorHandlers = () => {
  server.use(...contentErrorHandlers);
};