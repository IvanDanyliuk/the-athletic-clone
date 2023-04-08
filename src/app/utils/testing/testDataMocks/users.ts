import { IUserInitialState } from '../../../../features/users/types';

export const usersStateSuccessMock: IUserInitialState = {
  status: 'succeeded',
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
    users: [],
    usersCount: 0
  },
  filters: null,
  countries: [],
  error: null
};