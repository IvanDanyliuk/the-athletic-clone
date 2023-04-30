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