"use client";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import ChekMark from "../icons/ChekMark";
const UnitsCard = () => {
  const { unitType, setUnitType } = useContext(GlobalContext);
  return (
    <div className="bg-neutral-800 absolute top-3 right-0 rounded-xl w-44">
      <div className="flex flex-col gap-2 py-2 px-2">
        <button
          className="text-sm cursor-pointer text-start px-3 focus:border focus:py-2 rounded-lg"
          onClick={() =>
            setUnitType((prev) => (prev === "metric" ? "imperial" : "metric"))
          }
        >
          {unitType === "metric" ? " Switch to imperial" : " Switch to metric"}
        </button>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-neutral-400 px-3">Temperatur</p>
          <div className="flex flex-col gap-1 text-sm">
            <div
              className={`flex items-center justify-between px-3 ${
                unitType === "metric" && "bg-neutral-600 py-2 rounded-md"
              }`}
            >
              <p>Celcius (°C)</p>
              {unitType === "metric" && <ChekMark />}
            </div>
            <div
              className={`flex items-center justify-between px-3 ${
                unitType !== "metric" && "bg-neutral-600 py-2 rounded-md"
              }`}
            >
              <p
                className={`border-b border-neutral-600 w-full ${
                  unitType === "metric" && "pb-2"
                }`}
              >
                Fahrenheit (°F)
              </p>
              {unitType !== "metric" && <ChekMark />}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-neutral-400 px-3">Wind Speed</p>
          <div className="text-sm flex flex-col gap-1">
            <div
              className={`flex justify-between items-center px-3 ${
                unitType === "metric" && "bg-neutral-600 py-2 rounded-md"
              }`}
            >
              <p>km/h</p>
              {unitType === "metric" && <ChekMark />}
            </div>
            <div
              className={`flex justify-between items-center px-3 ${
                unitType !== "metric" && "bg-neutral-600 py-2 rounded-md"
              }`}
            >
              <p
                className={`border-b border-neutral-600 w-full ${
                  unitType === "metric" && "pb-2"
                }`}
              >
                mph
              </p>
              {unitType !== "metric" && <ChekMark />}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs text-neutral-400 px-3">Preciptation</p>
          <div
            className={`flex justify-between items-center px-3 ${
              unitType === "metric" && "bg-neutral-600 py-2 rounded-md"
            }`}
          >
            <p>Milimeters (mm)</p>
            {unitType === "metric" && <ChekMark />}
          </div>
          <div
            className={`flex justify-between items-center px-3 ${
              unitType !== "metric" && "bg-neutral-600 py-2 rounded-md"
            }`}
          >
            <p>Inches (in)</p>
            {unitType !== "metric" && <ChekMark />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitsCard;
