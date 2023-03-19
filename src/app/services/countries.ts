import countries from 'i18n-iso-countries';
import enCountriesValues from 'i18n-iso-countries/langs/en.json';

export const getCountries = () => {
  countries.registerLocale(enCountriesValues);
  const locations = countries.getNames('en', { select: 'official' });
  return Object.values(locations);
};