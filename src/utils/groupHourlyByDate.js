export const groupHourlyByDate = (hourly) => {
  const {
    time,
    temperature_2m,
    weathercode,
    apparent_temperature,
    precipitation,
    relativehumidity_2m,
    windspeed_10m,
  } = hourly;

  const grouped = {};

  time.forEach((timestamp, index) => {
    const date = timestamp.split("T")[0]; // "2026-01-09"
    const hour = timestamp.split("T")[1].slice(0, 5); // "00:00"

    // create key in object groupred if !grouped
    if (!grouped[date]) {
      grouped[date] = [];
    }
    // skip 3 jam
    if (index % 3 === 0) {
      grouped[date].push({
        time: hour,
        temp: temperature_2m[index],
        feels: apparent_temperature[index],
        humidity: relativehumidity_2m[index],
        wind: windspeed_10m[index],
        precip: precipitation[index],
        code: weathercode[index],
      });
    }
  });

  return grouped;
};
