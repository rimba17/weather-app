// utils/formatTime.js
export const formatToAmPm = (timeString) => {
  if (!timeString) return "";

  // destruc dan ambil array pertama,hasil split adalah menjadi array[] contoh ["14","00"]
  const [hourStr] = timeString.split(":");
  // change string ke integer , 10 adalah ganti jadi bilangan desimal
  const hour = parseInt(hourStr, 10);

  if (hour === 0) return "12 AM"; // midnight
  if (hour === 12) return "12 PM"; // noon
  if (hour < 12) return `${hour} AM`; // morning
  return `${hour - 12} PM`; // afternoon/evening
};
