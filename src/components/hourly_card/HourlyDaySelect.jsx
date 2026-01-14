"use client";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import { getDayName } from "@/utils/getDayName";
const HourlyDaySelect = ({ isOpen }) => {
  const {
    setIsSelectDayOpen,
    weatherData,
    setSelectedDayIndex,
    selectedDayIndex,
    setSelectedDayDate,
    setSelectedWeatherCode,
  } = useContext(GlobalContext);

  const handleChangeDay = (date, index) => {
    setSelectedWeatherCode(weatherData.daily.weathercode[index]);
    setSelectedDayDate(date);
    setSelectedDayIndex(index);
    setIsSelectDayOpen(false);
  };
  return (
    <div
      className={`absolute top-16 right-4 bg-neutral-800 w-1/2 p-2 rounded-lg border border-neutral-600 
        transition-all duration-300 ease-out origin-top-right
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-70 -translate-y-2 pointer-events-none"
        }`}
    >
      <div className="flex flex-col gap-3">
        {weatherData?.daily.time.map((date, index) => (
          <button
            onClick={() => handleChangeDay(date, index)}
            key={index}
            className={`py-2 text-start cursor-pointer w-full px-3 ${
              index === selectedDayIndex ? "bg-neutral-700 rounded-md" : ""
            }`}
          >
            {getDayName(date)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HourlyDaySelect;
