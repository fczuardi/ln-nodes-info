// TODO: maybe improve this hack to a more precise option using bigint or
// something like that to prevent potential pitfalls of floating numbers
export function displayCapacity(capacityInSats: number) {
  const satoshisInOneBtc = 100_000_000;
  const decimalPlaces = 8;
  return (capacityInSats / satoshisInOneBtc).toFixed(decimalPlaces);
}
// TODO: take into consideration i18n
// TODO: or even better, use a flag emoji
export function displayCountry(
  countryObject: { en: string; 'pt-BR': string } | undefined,
  language: 'en' | 'pt-BR'
) {
  return countryObject?.[language] || 'not informed';
}
export function displayDate(unixtime: number) {
  return new Date(unixtime * 1000).toLocaleDateString();
}
export function displayDateTooltip(unixtime: number) {
  return new Date(unixtime * 1000).toISOString();
}
