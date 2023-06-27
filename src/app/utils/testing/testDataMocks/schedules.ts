import { ISchedule, ISchedulesInitialState } from "../../../../features/schedules/types";
import { ScheduleModel } from "../../../models/components";

export const schedulesStateSuccessMock: ISchedulesInitialState = {
  status: 'succeeded',
  data: {
    main: {
      schedules: [
        {
          _id: '6426f8f2931e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8f3931e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6476f8f2931e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8f2921e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8a2931e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8f7931e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8f2936e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f7f2931e8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8f2931f8ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
        {
          _id: '6426f8f2931e1ab78f3c929d',
          competition: {
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
                __v: 0
              },
              {
                _id: '6419f3e71f12d2111b413ff2',
                fullName: 'Wolverhampton Wanderers',
                commonName: 'Wolves',
                shortName: 'WHT',
                country: 'United Kingdom',
                clubLogoUrl: '',
                stadium: 'Molineux Stadium',
                createdAt: '2023-03-21T18:13:59.515Z',
                updatedAt: '2023-03-21T18:13:59.515Z',
                __v: 0
              },
            ],
            logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
            type: 'league',
            createdAt: '2023-03-23T18:59:06.430Z',
            updatedAt: '2023-03-27T17:45:50.876Z',
            __v: 0
          },
          season: '2022/2023',
          fixture: [
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 1',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
            {
              id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
              matchweekName: 'Matchweek 2',
              basicDate: '2023-03-29T21:00:00.000Z',
              games: [
                {
                  id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
                  home: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  away: {
                    club: {
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
                    points: 1,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    final: 'D'
                  },
                  date: '2023-03-29T21:00:00.000Z',
                  location: 'Emirates Stadium',
                  score: '0:0',
                },
              ],
              _id: '6426f8f2931e8ab78f3c929e'
            },
          ],
          createdAt: '2023-03-31T15:14:58.641Z',
        },
      ],
      schedulesCount: 12
    },
    schedule: null,
    latestMatches: [],
  },
  filters: {
    country: 'United Kingdom',
    competition: '',
    dateFrom: '',
    dateTo: ''
  },
  error: null
};

export const schedulesStateErrorMock: ISchedulesInitialState = {
  status: 'succeeded',
  data: {
    main: {
      schedules: [],
      schedulesCount: 0
    },
    schedule: null,
    latestMatches: []
  },
  filters: null,
  error: 'error'
};

export const newSchedule: ScheduleModel = {
  competition: {
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
        _id: '6419f3e71f12d2111b413ff2',
        fullName: 'Wolverhampton Wanderers',
        commonName: 'Wolves',
        shortName: 'WHT',
        country: 'United Kingdom',
        clubLogoUrl: '',
        stadium: 'Molineux Stadium',
        createdAt: '2023-03-21T18:13:59.515Z',
        updatedAt: '2023-03-21T18:13:59.515Z',
      },
    ],
    logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
    type: 'league',
    createdAt: '2023-03-23T18:59:06.430Z',
  },
  season: '2022/2023',
  fixture: [
    {
      id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
      matchweekName: 'Matchweek 1',
      basicDate: '2023-03-29T21:00:00.000Z',
      games: [
        {
          id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
          home: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          away: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          date: '2023-03-29T21:00:00.000Z',
          location: 'Emirates Stadium',
          score: '0:0',
        },
      ],
    },
    {
      id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
      matchweekName: 'Matchweek 2',
      basicDate: '2023-03-29T21:00:00.000Z',
      games: [
        {
          id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
          home: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          away: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          date: '2023-03-29T21:00:00.000Z',
          location: 'Emirates Stadium',
          score: '0:0',
        },
      ],
    },
  ],
};

export const scheduleToUpdate: ISchedule = {
  _id: '6426f8f2931e8ab78f3c929d',
  competition: {
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
        _id: '6419f3e71f12d2111b413ff2',
        fullName: 'Wolverhampton Wanderers',
        commonName: 'Wolves',
        shortName: 'WHT',
        country: 'United Kingdom',
        clubLogoUrl: '',
        stadium: 'Molineux Stadium',
        createdAt: '2023-03-21T18:13:59.515Z',
        updatedAt: '2023-03-21T18:13:59.515Z',
      },
    ],
    logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
    type: 'league',
    createdAt: '2023-03-23T18:59:06.430Z',
    updatedAt: '2023-03-27T17:45:50.876Z',
  },
  season: '2022/2023',
  fixture: [
    {
      id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
      matchweekName: 'Matchweek 1',
      basicDate: '2023-03-29T21:00:00.000Z',
      games: [
        {
          id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
          home: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          away: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          date: '2023-03-29T21:00:00.000Z',
          location: 'Emirates Stadium',
          score: '0:0',
        },
      ],
      _id: '6426f8f2931e8ab78f3c929e'
    },
    {
      id: '881ae563-d76c-4d3b-bbe2-14d1144ba390',
      matchweekName: 'Matchweek 2',
      basicDate: '2023-03-29T21:00:00.000Z',
      games: [
        {
          id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
          home: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          away: {
            club: {
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
            points: 1,
            goalsFor: 0,
            goalsAgainst: 0,
            final: 'D'
          },
          date: '',
          location: 'Emirates Stadium',
          score: '0:0',
        },
      ],
      _id: '6426f8f2931e8ab78f3c929e'
    },
  ],
  createdAt: '2023-03-31T15:14:58.641Z',
};

export const latestMatechesMock = [
  {
    league: 'EPL',
    matches: [
      {
        id: 'b5fb278e-4a5d-45cb-9a15-1406f09fae0c',
        home: {
          club: {
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
          points: 1,
          goalsFor: 0,
          goalsAgainst: 0,
          final: 'D'
        },
        away: {
          club: {
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
          points: 1,
          goalsFor: 0,
          goalsAgainst: 0,
          final: 'D'
        },
        date: '',
        location: 'Emirates Stadium',
        score: '0:0',
      },
    ]
  }
];

export const addScheduleTitleMock = jest.fn();
export const addMatchweekMock = jest.fn();
export const addMatchMock = jest.fn();
export const deleteMatchweekMock = jest.fn();
export const deleteMatchMock = jest.fn();