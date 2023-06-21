import { rest } from 'msw';
import { server } from './serverMock';
import { usersStateSuccessMock, newUser, userToUpdate } from '../testDataMocks/users';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const usersSuccessHandlers = [
  rest.get(`${baseUrl}/users/all`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(usersStateSuccessMock.data)
    );
  }),
  rest.post(`${baseUrl}/users/new-user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(newUser)
    )
  }),
  rest.post(`${baseUrl}/users/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(userToUpdate)
    )
  }),
  rest.post(`${baseUrl}/users/signup`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(newUser)
    )
  }),
  rest.patch(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(userToUpdate)
    )
  }),
];

const usersErrorHandlers = [
  rest.get(`${baseUrl}/users/all`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    );
  }),
  rest.post(`${baseUrl}/users/new-user`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
  rest.patch(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json('Error')
    )
  }),
];


export const setupUsersSuccessHandlers = () => {
  server.use(...usersSuccessHandlers);
};

export const setupUsersErrorHandlers = () => {
  server.use(...usersErrorHandlers);
};