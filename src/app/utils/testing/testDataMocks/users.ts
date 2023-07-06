import { StateStatus } from '../../../../features/types';
import { IUser, IUserInitialState } from '../../../../features/users/types';
import { UserModel } from '../../../models/users';


export const usersStateSuccessMock: IUserInitialState = {
  status: StateStatus.Succeded,
  user: {
    _id: '63e8db447a8501b5b2a8428b',
    firstName: 'John',
    lastName: 'Doe',
    email: 'j.doe@gmail.com',
    password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
    userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
    role: 'admin',
    location: 'United Kingdom',
    organization: 'The Athletic',
    position: 'Website Administrator',
    createdAt: '2023-02-12T12:27:48.640Z',
  },
  data: {
    users: [
      {
        _id: '63e8db447a8501b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db437a8501b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe1@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX5022leAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db447a8581b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe2@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502O3eAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db447a8501b5b7a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe3@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX50215eAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db447a8501b5b3a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe4@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX5121leAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db447a8511b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe5@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502O7eAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db447a8507b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe6@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502O4eAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db747a8501b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe7@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '93e8db447a8501b5b2a8428b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe8@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
      {
        _id: '63e8db447a851b5b2a8828b',
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe9@gmail.com',
        password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
        userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
        role: 'admin',
        location: 'United Kingdom',
        organization: 'The Athletic',
        position: 'Website Administrator',
        createdAt: '2023-02-12T12:27:48.640Z',
      },
    ],
    usersCount: 12
  },
  filters: {
    role: 'author',
    dateFrom: '',
    dateTo: '',
    location: ''
  },
  countries: [
    'United Kingdom',
    'Netherlands',
    'New Zealand',
    'Austria',
    'Andorra',
    'Angola',
    'Bahamas',
    'Aruba',
    'Barbados'
  ],
  error: null
};

export const usersStateErrorMock: IUserInitialState = {
  status: StateStatus.Failed,
  user: null,
  data: {
    users: [],
    usersCount: 0
  },
  filters: null,
  countries: [],
  error: 'error'
};

export const newUser: UserModel = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'j.doe@gmail.com',
  password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
  userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
  role: 'admin',
  location: 'United Kingdom',
  organization: 'The Athletic',
  position: 'Website Administrator',
};

export const userToUpdate: IUser = {
  _id: '63e8db447a8501b5b2a8428b',
  firstName: 'John',
  lastName: 'Doe',
  email: 'j.doe@gmail.com',
  password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
  userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
  role: 'admin',
  location: 'United Kingdom',
  organization: 'The Athletic',
  position: 'Website Administrator',
  createdAt: '2023-02-12T12:27:48.640Z',
};