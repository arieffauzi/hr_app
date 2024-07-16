export const formatingDate = (param: Date) => {
  const date = new Intl.DateTimeFormat("en-EN", {
    // weekday: "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric",
    dateStyle: 'full',
    timeStyle:'short'
  }).format(param);
  return date;
};
