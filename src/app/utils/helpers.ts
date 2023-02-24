export const setUrl = (title: string) => {
  const splittedTitle = title.toLowerCase().split(' ').map(item => item.replace(/[^a-z0-9]/gi, ''));
  return splittedTitle.length > 1 ? splittedTitle.join('-') : splittedTitle[0];
};

export const setPreviewText = (wordsNumber: number, text: string) => {
  const data = text.split(' ').slice(0, wordsNumber).join(' ');
  return `${data}...`;
};