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