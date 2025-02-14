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
  rest.get(`${baseUrl}/users/by-role`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(usersStateSuccessMock.data.users)
    );
  }),
  rest.get(`${baseUrl}/users/locations`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(usersStateSuccessMock.countries)
    );
  }),
  rest.get(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(userToUpdate)
    );
  }),
  rest.post(`${baseUrl}/users/new-user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(userToUpdate)
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
  rest.post(`${baseUrl}/users/logout`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    )
  }),
  rest.patch(`${baseUrl}/users/password`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(userToUpdate)
    )
  }),
  rest.patch(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(userToUpdate)
    )
  }),
  rest.delete(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(204),
    )
  }),
];

const usersErrorHandlers = [
  rest.get(`${baseUrl}/users/all`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Users Error' })
    );
  }),
  rest.get(`${baseUrl}/users/by-role`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Users By Role Error' })
    );
  }),
  rest.get(`${baseUrl}/users/locations`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get User Locations Error' })
    );
  }),
  rest.get(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Get Authenticated User Error' })
    );
  }),
  rest.post(`${baseUrl}/users/new-user`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Create New User Error' })
    )
  }),
  rest.post(`${baseUrl}/users/login`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Login Error' })
    )
  }),
  rest.post(`${baseUrl}/users/signup`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Signup Error' })
    )
  }),
  rest.post(`${baseUrl}/users/logout`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Logout Error' })
    )
  }),
  rest.patch(`${baseUrl}/users/password`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update Password Error' })
    )
  }),
  rest.patch(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Update User Error' })
    )
  }),
  rest.delete(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: 'Delete User Error' })
    )
  }),
];


export const setupUsersSuccessHandlers = () => {
  server.use(...usersSuccessHandlers);
};

export const setupUsersErrorHandlers = () => {
  server.use(...usersErrorHandlers);
};