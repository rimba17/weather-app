import DropDown from "../icons/DropDown";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import HourlyDaySelect from "./HourlyDaySelect";
import { getDayName } from "@/utils/getDayName";
import { groupHourlyByDate } from "@/utils/groupHourlyByDate";
import { formatToAmPm } from "@/utils/formatToAmPm";
import { weatherCode } from "@/Constant/weatherCode";
import HourlyLoading from "./HourlyLoading";
import { convertValueByUnit } from "@/utils/convertValueByUnit";
const HourlyCard = () => {
  const {
    selectedDayIndex,
    selectedDayDate,
    isSelectDayOpen,
    setIsSelectDayOpen,
    weatherData,
    unitType,
  } = useContext(GlobalContext);

  let hourlyOfSelectedDay = null;
  if (weatherData !== null) {
    let hourlyGroup = groupHourlyByDate(weatherData.hourly);
    hourlyOfSelectedDay = hourlyGroup[selectedDayDate];
  }
  return (
    <div className="relative bg-neutral-800 rounded-[15px] p-5 lg:p-4 lg:max-h-145 flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl mb-2 lg:mb-0 lg:text-base">
          Hourly forecast
        </h1>
        <button
          onClick={() => setIsSelectDayOpen((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-2 bg-neutral-700 rounded-md cursor-pointer"
        >
          {weatherData !== null
            ? getDayName(weatherData.daily.time[selectedDayIndex])
            : "-"}
          <DropDown />
        </button>
      </div>

      {/* SCROLL AREA */}
      <div className="mt-3 flex flex-col gap-2 overflow-y-auto custom-scroll">
        {!hourlyOfSelectedDay ? (
          <HourlyLoading />
        ) : (
          hourlyOfSelectedDay?.map((data, index) => {
            const Icon = weatherCode[data.code];
            return (
              <div
                className="bg-neutral-700 p-2 rounded-lg flex gap-2 items-center justify-between"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 lg:w-8">{Icon && <Icon />}</div>
                  <p className="text-xl font-normal lg:font-semibold lg:text-base">
                    {formatToAmPm(data.time)}
                  </p>
                </div>
                <p className="text-xl lg:text-base">
                  {convertValueByUnit(data.temp, unitType, "temp")}
                </p>
              </div>
            );
          })
        )}
      </div>

      <HourlyDaySelect isOpen={isSelectDayOpen} />
    </div>
  );
};

export default HourlyCard;
