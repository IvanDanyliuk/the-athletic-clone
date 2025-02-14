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
  rest.delete(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(contentSection)
    );
  }),
];

const contentErrorHandlers = [
  rest.get(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Content Sections Error' })
    );
  }),
  rest.post(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'CreateContent Section Error' })
    );
  }),
  rest.patch(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Content Section Error' })
    );
  }),
  rest.delete(`${baseUrl}/content`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete Content Section Error' })
    );
  }),
];


export const setupContentSuccessHandlers = () => {
  server.use(...contentSuccessHandlers);
};

export const setupContentErrorHandlers = () => {
  server.use(...contentErrorHandlers);
};