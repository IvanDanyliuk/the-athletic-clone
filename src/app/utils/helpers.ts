import { v4 as uuid } from 'uuid';
import { IClub } from '../../features/clubs/types';
import { IMatchweek, ISchedule } from '../../features/schedules/types';
import { ScheduleModel } from '../models/components';
import { StandingItem } from '../../features/competitions/types';

export const setUrl = (title: string) => {
  const splittedTitle = title.toLowerCase().split(' ').map(item => item.replace(/[^a-z0-9]/gi, ''));
  return splittedTitle.length > 1 ? splittedTitle.join('-') : splittedTitle[0];
};

export const setPreviewText = (wordsNumber: number, text: string) => {
  const data = text.split(' ').slice(0, wordsNumber).join(' ');
  return `${data}...`;
};

export const checkFilterTimeInterval = (dateFrom: string, dateTo: string, setError: (error: string) => void) => {
  if(dateFrom && !dateTo) {
    setError('Set the final date value (To)');
    return false;
  }
  if(!dateFrom && dateTo) {
    setError('Set the initial date value (From)')
    return false;
  }
  if(Date.parse(dateFrom) > Date.parse(dateTo)) {
    setError('The initial date cannot be greater than the final date');
    return false;
  }
  return true;
};

export const checkScheduleData = (schedule: ScheduleModel) => {
  return Boolean(
    schedule.competition && schedule.season && schedule.fixture.length > 0
  );
};

export const capitalizeString = (value: string) => value[0].toUpperCase() + value.slice(1);

export const divideArrayIntoChunks = (array: any[], itemsPerChunk: number) => {
  let chunks = [];
  for (let i = 0; i < array.length; i += itemsPerChunk) {
    const chunk = array.slice(i, i + itemsPerChunk);
    chunks.push(chunk);
  }
  return chunks;
};

export const getCurrentSeasonValue = () => {
  const currentMonthIndex = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  if(currentMonthIndex >= 8) {
    return `${currentYear}/${currentYear + 1}`
  } else {
    return `${currentYear - 1}/${currentYear}`
  }
};

export const setNearestItems: any = (range: IMatchweek[] | StandingItem[], currentitemId: string, itemsToShow: number) => {
  const mwIds = range.map(mw => mw._id);
  const middlePos = mwIds.indexOf(currentitemId);
  const rangeHalfValue = Math.floor(itemsToShow / 2);
  const left = range.slice(0, middlePos);
  const right = range.slice(middlePos! + 1);

  if(left.length >= rangeHalfValue && right.length >= rangeHalfValue) {
    const leftSide = left.reverse().slice(0, rangeHalfValue).reverse();
    const rightSide = right.slice(0, rangeHalfValue);
    return [...leftSide, range[middlePos!], ...rightSide];
  } else {
    if(left.length < right.length) {
      const leftSide = left.reverse().slice(0, rangeHalfValue).reverse();
      const rightSide = right.slice(0, itemsToShow - leftSide.length - 1);
      return [...leftSide, range[middlePos!], ...rightSide];
    } else {
      const rightSide = right.slice(0, rangeHalfValue);
      const leftSide = left.reverse().slice(0, itemsToShow - rightSide.length - 1).reverse();
      return [...leftSide, range[middlePos!], ...rightSide];
    }
  }
};

export const countStandingTableData = (schedule: ISchedule) => {
  const clubs = schedule.competition.clubs.map((club: IClub) => ({ club, points: 0, goals: 0 }));
  const matches = schedule.fixture.map(mw => mw.games.map(club => ([club.home, club.away])))
  const flattedMatches = matches.flat(2);

  const standing = clubs.map((club: any) => {
    const participants = flattedMatches.filter(item => item.club._id === club.club._id);
    const points = participants.reduce((acc, cur) => acc + cur.points, 0);
    const goalsFor = participants.reduce((acc, cur) => acc + cur.goalsFor, 0);
    const goalsAgainst = participants.reduce((acc, cur) => acc + cur.goalsAgainst, 0);
    const goalDifference = goalsFor - goalsAgainst;
    const wins = flattedMatches.filter(item => club.club._id === item.club._id && item.final === 'W');
    const loses = flattedMatches.filter(item => club.club._id === item.club._id && item.final === 'L');
    const draws = flattedMatches.filter(item => club.club._id === item.club._id && item.final === 'D');
    const latestGames = flattedMatches.filter(item => club.club._id === item.club._id).map(item => item.final).reverse().slice(0, 5).reverse();
    return { 
      _id: uuid(),
      club: club.club, 
      playedMatches: participants.length, 
      points, 
      goalsFor, 
      goalsAgainst, 
      goalDifference, 
      wins: wins.length, 
      loses: loses.length, 
      draws: draws.length, 
      latestGames
    };
  }).sort((acc: any, cur: any) => cur.points - acc.points);
  
  return standing;
};