import { ICompetitionsInitialState } from '../../../../features/competitions/types';
import { CompetitionModel } from '../../../models/components';

export const competitionsStateSuccessMock: ICompetitionsInitialState = {
  status: 'succeeded',
  data: {
    competitions: [
      {
        _id: '641ca17ae8277803cff5195e',
        fullName: 'Premier League',
        shortName: 'EPL',
        country: 'United Kingdom',
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
        logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
        type: 'league',
        createdAt: '2023-03-23T18:59:06.430Z',
      },
    ],
    competitionsCount: 1
  },
  filters: {
    country: 'United Kingdom',
    type: ''
  },
  error: null
};

export const competitions = [
  {
    _id: '641ca17ae8277803cff5195e',
    fullName: 'Premier League',
    shortName: 'EPL',
    country: 'United Kingdom',
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
    logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
    type: 'league',
    createdAt: '2023-03-23T18:59:06.430Z',
  },
];

export const getAllCompetitionsResponseMock = {
  competitions: [
    {
      _id: '641ca17ae8277803cff5195e',
      fullName: 'Premier League',
      shortName: 'EPL',
      country: 'United Kingdom',
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
      logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
      type: 'league',
      createdAt: '2023-03-23T18:59:06.430Z',
    },
  ],
  competitionsCount: 1,
};

export const newCompetition: CompetitionModel = {
  fullName: 'Premier League',
  shortName: 'EPL',
  country: 'United Kingdom',
  clubs: [
    {
      fullName: 'Arsenal FC',
      commonName: 'Arsenal',
      shortName: 'ARS',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
      stadium: 'Emirates Stadium',
    },
    {
      fullName: 'Chelsea FC',
      commonName: 'Chelsea',
      shortName: 'CHE',
      country: 'United Kingdom',
      clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679422856/vr0isj4q0v3qg5cgkp9s.png',
      stadium: 'Stamford Bridge',
    },
  ],
  logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
  type: 'league',
};

export const competitionToUpdate = {
  _id: '641ca17ae8277803cff5195e',
  fullName: 'Premier League',
  shortName: 'EPL',
  country: 'United Kingdom',
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
  logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
  type: 'league',
  createdAt: '2023-03-23T18:59:06.430Z',
};