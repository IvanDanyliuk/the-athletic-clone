import { rest } from 'msw';
import { server } from './serverMock';
import { articleToUpdate, materialsStateSuccessMock, newArticle } from '../testDataMocks/materials';
import { competitionsStateSuccessMock } from '../testDataMocks/competitions';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const materialsSuccessHandlers = [
  rest.get(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(materialsStateSuccessMock.data.main)
    );
  }),
  rest.get(`${baseUrl}/materials/recent`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(materialsStateSuccessMock.data.main.materials)
    );
  }),
  rest.get(`${baseUrl}/materials/search-values`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        competitions: competitionsStateSuccessMock.data.main.competitions,
        clubs: [],
        authors: []
      })
    );
  }),
  rest.get(`${baseUrl}/materials/search`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(materialsStateSuccessMock.data.main.materials)
    );
  }),
  rest.get(`${baseUrl}/materials/homepage`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(materialsStateSuccessMock.data.homepage)
    );
  }),
  rest.get(`${baseUrl}/materials/${articleToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(articleToUpdate)
    );
  }),
  rest.post(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(newArticle)
    );
  }),
  rest.patch(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(articleToUpdate)
    );
  }),
  rest.delete(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(materialsStateSuccessMock.data.main)
    );
  }),
];

const materialsErrorHandlers = [
  rest.get(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Materials Error' })
    );
  }),
  rest.get(`${baseUrl}/materials/recent`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Recent Materials Error' })
    );
  }),
  rest.get(`${baseUrl}/materials/search-values`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Search Values Error' })
    );
  }),
  rest.get(`${baseUrl}/materials/search`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Search Error' })
    );
  }),
  rest.get(`${baseUrl}/materials/homepage`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Homepage Materials Error' })
    );
  }),
  rest.get(`${baseUrl}/materials/${articleToUpdate._id}`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Material Error' })
    );
  }),
  rest.post(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Create Material Error' })
    );
  }),
  rest.patch(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Material Error' })
    );
  }),
  rest.delete(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete Material Error' })
    );
  }),
];


export const setupMaterialsSuccessHandlers = () => {
  server.use(...materialsSuccessHandlers);
};

export const setupMaterialsErrorHandlers = () => {
  server.use(...materialsErrorHandlers);
};