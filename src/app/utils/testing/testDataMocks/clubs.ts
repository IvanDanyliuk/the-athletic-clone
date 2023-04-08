import { ICLubsInitialState } from '../../../../features/clubs/types';

export const clubsStateSuccessMock: ICLubsInitialState = {
  status: 'succeeded',
  data: {
    clubs: [{
      _id: '6419a26d6e0212a0462b4dd2',
      fullName: 'Arsenal FC',
      commonName: 'Arsenal',
      shortName: 'ARS',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
      stadium: 'Emirates Stadium',
      createdAt: '2023-03-21T12:26:21.895Z',
      updatedAt: '2023-03-21T12:26:21.895Z',
    },
    {
      _id: '6419f57b1f12d2111b413ffc',
      fullName: 'Chelsea FC',
      commonName: 'Chelsea',
      shortName: 'CHE',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679422856/vr0isj4q0v3qg5cgkp9s.png',
      stadium: 'Stamford Bridge',
      createdAt: '2023-03-21T18:20:43.873Z',
      updatedAt: '2023-03-21T18:20:43.873Z',
    },],
    clubsCount: 2
  },
  filters: null,
  clubsByCountry: [
    {
      _id: '6419a26d6e0212a0462b4dd2',
      fullName: 'Arsenal FC',
      commonName: 'Arsenal',
      shortName: 'ARS',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
      stadium: 'Emirates Stadium',
      createdAt: '2023-03-21T12:26:21.895Z',
      updatedAt: '2023-03-21T12:26:21.895Z',
    },
    {
      _id: '6419f57b1f12d2111b413ffc',
      fullName: 'Chelsea FC',
      commonName: 'Chelsea',
      shortName: 'CHE',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679422856/vr0isj4q0v3qg5cgkp9s.png',
      stadium: 'Stamford Bridge',
      createdAt: '2023-03-21T18:20:43.873Z',
      updatedAt: '2023-03-21T18:20:43.873Z',
    },
  ],
  error: null
};

export const clubs = [
  {
    _id: '6419a26d6e0212a0462b4dd2',
    fullName: 'Arsenal FC',
    commonName: 'Arsenal',
    shortName: 'ARS',
    country: 'United Kingdom',
    clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
    stadium: 'Emirates Stadium',
    createdAt: '2023-03-21T12:26:21.895Z',
    updatedAt: '2023-03-21T12:26:21.895Z',
  },
];

export const getClubsByCountryResponseMock = {
  clubs: [
    {
      _id: '6419a26d6e0212a0462b4dd2',
      fullName: 'Arsenal FC',
      commonName: 'Arsenal',
      shortName: 'ARS',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
      stadium: 'Emirates Stadium',
      createdAt: '2023-03-21T12:26:21.895Z',
      updatedAt: '2023-03-21T12:26:21.895Z',
    }
  ],
  clubsCount: 1,
};