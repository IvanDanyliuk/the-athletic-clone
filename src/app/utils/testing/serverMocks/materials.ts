import { rest } from 'msw';
import { server } from './serverMock';
import { newArticle } from '../testDataMocks/materials';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const materialsSuccessHandlers = [
  rest.post(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(newArticle)
    );
  }),
  rest.patch(`${baseUrl}/materials`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(newArticle)
    );
  }),
];


export const setupMaterialsSuccessHandlers = () => {
  server.use(...materialsSuccessHandlers);
};
