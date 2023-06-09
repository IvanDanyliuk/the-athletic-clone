import { IPlayer, IPlayerInitialState } from "../../../../features/players/types";
import { PlayerModel } from "../../../models/components";


export const playersStateSuccessMock: IPlayerInitialState = {
  status: 'succeeded',
  data: {
    main: {
      players: [
        {
          _id: '641f36e462652c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '646f36e462652c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e482652c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e462655c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '649f36e462652c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e462652c999e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e462652a997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e262652c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e462752c997e106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
        {
          _id: '641f36e462652c997a106e6a',
          firstName: 'Mykhailo',
          lastName: 'Mudryk',
          birthDate: '2001-03-14T22:00:00.000Z',
          country: 'Ukraine',
          photoUrl: '',
          number: '15',
          position: 'M',
          club: 'Chelsea',
          createdAt: '2023-03-25T18:01:08.305Z',
        },
      ],
      playersCount: 12
    },
    player: null
  },
  filters: {
    country: 'Ukraine',
    club: '',
    dateFrom: '',
    dateTo: '',
    position: ''
  },
  error: null
};

export const playersStateErrorMock: IPlayerInitialState = {
  status: 'failed',
  data: {
    main: {
      players: [],
      playersCount: 0
    },
    player: null
  },
  filters: null,
  error: 'error'
};

export const newPlayer: PlayerModel = {
  firstName: 'Mykhailo',
  lastName: 'Mudryk',
  birthDate: '2001-03-14T22:00:00.000Z',
  country: 'Ukraine',
  photoUrl: '',
  number: '15',
  position: 'M',
  club: 'Chelsea',
};

export const playerToUpdate: IPlayer = {
  _id: '641f36e462652c997e106e6a',
  firstName: 'Mykhailo',
  lastName: 'Mudryk',
  birthDate: '2001-03-14T22:00:00.000Z',
  country: 'Ukraine',
  photoUrl: '',
  number: '15',
  position: 'M',
  club: 'Chelsea',
  createdAt: '2023-03-25T18:01:08.305Z',
};