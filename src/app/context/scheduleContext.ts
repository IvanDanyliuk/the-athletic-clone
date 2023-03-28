import { createContext } from 'react';
import { IClub } from '../../features/clubs/types';

interface IMatchweek {
  matchweekName: string,
  games: {
    home: IClub[],
    away: IClub[],
    date: Date,
    location: string,
    score: string
  }[]
}

const ScheduleContext = createContext<IMatchweek[]>([]);

export default ScheduleContext;