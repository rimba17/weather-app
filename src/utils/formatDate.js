export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}
