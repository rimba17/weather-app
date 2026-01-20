import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import { getDayNameShort } from "@/utils/getDayNameShort";
import { weatherCode } from "@/Constant/weatherCode";
import { groupDailyByDate } from "@/utils/groupDailyByDate";
import LoadingDailyForecast from "./LoadingDailyForecast";
import { convertValueByUnit } from "@/utils/convertValueByUnit";
const DailyForecastCard = () => {
  const { weatherData, isLoading, unitType } = useContext(GlobalContext);

  let groupedDaily = null;
  if (weatherData !== null) {
    let data = groupDailyByDate(weatherData);
    groupedDaily = data;
  }
  return (
    <>
      <p className="font-semibold mb-3 text-xl lg:text-base lg:mb-2">
        Daily forecast
      </p>
      <div className="grid grid-cols-12 gap-4 lg:gap-2 lg:grid-cols-7">
        {isLoading || !weatherData ? (
          <LoadingDailyForecast />
        ) : (
          groupedDaily?.map((data, index) => {
            const Icon = weatherCode[data.code];
            return (
              <div
                className="bg-neutral-700 col-span-4 rounded-lg flex flex-col items-center px-2 py-2 lg:col-span-1 lg:py-3 lg:px-1 lg:gap-2"
                key={index}
              >
                <p className="text-base font-medium lg:text-sm lg:font-normal">
                  {getDayNameShort(data.date)}
                </p>
                <div className="w-20 lg:w-16">{Icon && <Icon />}</div>
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-base lg:text-xs font-semibold">
                      {convertValueByUnit(
                        weatherData.daily.temperature_2m_max[index],
                        unitType,
                        "temp",
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-base lg:text-xs font-semibold">
                      {convertValueByUnit(
                        weatherData.daily.temperature_2m_min[index],
                        unitType,
                        "temp",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default DailyForecastCard;
