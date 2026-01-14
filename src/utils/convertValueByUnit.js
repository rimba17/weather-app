export const convertValueByUnit = (value, unitType, type) => {
  if (unitType === "metric") {
    if (type === "temp") return `${Math.round(value)}°C`;
    if (type === "wind") return `${Math.round(value)} km/h`;
    if (type === "rain") return `${Math.round(value)} mm`;
    return value;
  }

  // Imperial
  if (type === "temp") return `${Math.round((value * 9) / 5 + 32)}°F`;
  if (type === "wind") return `${Math.round(value * 0.621371)} mph`;
  if (type === "rain") return `${(value / 25.4).toFixed(2)} in`;

  return value;
};
