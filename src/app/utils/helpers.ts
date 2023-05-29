import { IMatchweek } from "../../features/schedules/types";
import { ScheduleModel } from "../models/components";

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

export const setCompetitionTabs = (matchweeks: IMatchweek[], currentMatchweek: IMatchweek) => {
  const mwIds = matchweeks.map(mw => mw._id);
  const middlePos = mwIds.indexOf(currentMatchweek!._id!);
  const left = matchweeks.slice(0, middlePos);
  const right = matchweeks.slice(middlePos! + 1);

  if(left.length >= 2 && right.length >= 2) {
    const leftSide = left.reverse().slice(0, 2).reverse();
    const rightSide = right.slice(0, 2);
    console.log({leftSide, middle: matchweeks[middlePos], rightSide})
    return [...leftSide, matchweeks[middlePos!], ...rightSide];
  } else {
    if(left.length < right.length) {
      const leftSide = left.reverse().slice(0, 2).reverse();
      const rightSide = right.slice(0, 5 - leftSide.length - 1);
      console.log({leftSide, middle: matchweeks[middlePos], rightSide})
      return [...leftSide, matchweeks[middlePos!], ...rightSide];
    } else {
      const rightSide = right.slice(0, 2);
      const leftSide = left.reverse().slice(0, 5 - rightSide.length - 1).reverse();
      console.log({leftSide, middle: matchweeks[middlePos], rightSide})
      return [...leftSide, matchweeks[middlePos!], ...rightSide];
    }
  }
};