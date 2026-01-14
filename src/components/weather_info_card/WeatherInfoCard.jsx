import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import { groupHourlyByDate } from "@/utils/groupHourlyByDate";
import { convertValueByUnit } from "@/utils/convertValueByUnit";
const WeatherInfoCard = () => {
  const { weatherData, selectedDayDate, isLoading, unitType } =
    useContext(GlobalContext);

  let dataInfo = null;
  if (weatherData !== null) {
    let data = groupHourlyByDate(weatherData.hourly);
    dataInfo = data[selectedDayDate];
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-neutral-700 p-3 col-span-2 lg:col-span-1 rounded-lg ">
        <p className=" mb-3 text-xl lg:text-base lg:text-neutral-400">
          Feels Like
        </p>
        <p className="text-neutral-200 text-3xl lg:text-2xl">
          {isLoading || !dataInfo ? (
            <span className="font-bold">-</span>
          ) : (
            `${convertValueByUnit(dataInfo[0].feels, unitType, "temp")}`
          )}
        </p>
      </div>
      <div className="bg-neutral-700 p-3 col-span-2 lg:col-span-1 rounded-lg ">
        <p className=" mb-3 text-xl lg:text-base lg:text-neutral-400">
          Humidity
        </p>
        <p className="text-neutral-200 text-3xl lg:text-2xl">
          {isLoading || !dataInfo ? (
            <span className="font-bold">-</span>
          ) : (
            `${Math.round(dataInfo[0].humidity)}%`
          )}
        </p>
      </div>
      <div className="bg-neutral-700 p-3 col-span-2 lg:col-span-1 rounded-lg ">
        <p className=" mb-3 text-xl lg:text-base lg:text-neutral-400">Wind</p>
        <p className="text-neutral-200 text-3xl lg:text-2xl">
          {isLoading || !dataInfo ? (
            <span className="font-bold">-</span>
          ) : (
            `${convertValueByUnit(dataInfo[0].wind, unitType, "wind")}`
          )}
        </p>
      </div>
      <div className="bg-neutral-700 p-3 col-span-2 lg:col-span-1 rounded-lg ">
        <p className=" mb-3 text-xl lg:text-base lg:text-neutral-400">
          Precipitation
        </p>
        <p className="text-neutral-200 text-3xl lg:text-2xl">
          {isLoading || !dataInfo ? (
            <span className="font-bold">-</span>
          ) : (
            `${convertValueByUnit(dataInfo[0].precip, unitType, "rain")}`
          )}
        </p>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
