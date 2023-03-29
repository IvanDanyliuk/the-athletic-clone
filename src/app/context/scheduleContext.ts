import { createContext } from 'react';
import { IClub } from '../../features/clubs/types';
import { IMatch, IMatchweek } from '../../features/schedules/types';
import { ScheduleModel } from '../models/components';




export interface ScheduleContextType {
  schedule: ScheduleModel,
  addScheduleTitle: (data: any) => void,
  addMatchweek: (mw: IMatchweek) => void,
  addMatch: (mwId: string, match: IMatch) => void,
  deleteMatchweek: (mwId: string) => void,
  deleteMatch: (matchId: string) => void
}

const ScheduleContext = createContext<ScheduleContextType | null>(null);

export default ScheduleContext;