import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import { formatDate } from "@/utils/formatDate";
import { weatherCode } from "@/Constant/weatherCode";
import LoadingOverViewCard from "./LoadingOverViewCard";
import { convertValueByUnit } from "@/utils/convertValueByUnit";
const OverViewCard = () => {
  const {
    isLoading,
    selectedLocation,
    weatherData,
    selectedDayIndex,
    selectedWeatherCode,
    unitType,
  } = useContext(GlobalContext);
  const Icon = weatherCode[selectedWeatherCode];

  return (
    <>
      {isLoading || !weatherData ? (
        <LoadingOverViewCard />
      ) : (
        <div
          className={`flex flex-col px-6 py-14 
        bg-[url('/assets/images/bg-today-small.svg')]   
        bg-no-repeat bg-center bg-cover rounded-2xl md:bg-[url('/assets/images/bg-today-large.svg')] 
        lg:flex-row lg:justify-between lg:items-center`}
        >
          <div>
            <h1 className="text-2xl font-semibold mb-1 text-center lg:mb-0 lg:text-2xl lg:text-start">
              {`${selectedLocation.name},${selectedLocation.country}`}
            </h1>
            <p className="text-xl text-neutral-200 text-center mb-4 lg:text-base lg:text-start">
              {weatherData !== null &&
                formatDate(weatherData.daily.time[selectedDayIndex])}
            </p>
          </div>
          <div className="flex items-center justify-between md:justify-center gap-6">
            <div className="w-20 lg:w-16 xl:w-20">{Icon ? <Icon /> : null}</div>
            <h1 className="text-7xl font-semibold font-secondary lg:text-6xl/relaxed xl:text-7xl/relaxed">
              <i>
                {weatherData !== null &&
                  convertValueByUnit(
                    weatherData.daily.temperature_2m_max[selectedDayIndex],
                    unitType,
                    "temp",
                  )}
              </i>
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default OverViewCard;
