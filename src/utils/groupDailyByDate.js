export const groupDailyByDate = ({ daily }) => {
  const { time, weathercode } = daily;

  return time.map((date, index) => ({
    date,
    code: weathercode[index],
  }));
};
