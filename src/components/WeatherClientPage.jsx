"use client";
import Search from "@/components/search/Search";
import OverViewCard from "@/components/overview_card/OverViewCard";
import HourlyCard from "@/components/hourly_card/HourlyCard";
import Hero from "@/components/hero/Hero";
import WeatherInfoCard from "@/components/weather_info_card/WeatherInfoCard";
import DailyForecastCard from "@/components/daily_forecast_card/DailyForecastCard";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import ErrorState from "./error/ErrorState";
const WeatherClientWrapper = () => {
  const { isErrorFetch, retryFetch } = useContext(GlobalContext);
  if (isErrorFetch) return <ErrorState onRetry={retryFetch} />;

  return (
    <section className="grid grid-cols-12 gap-x-4">
      <div className="col-span-12 mb-12">
        <Hero />
      </div>
      <div className="col-span-12 mb-10">
        <Search />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <OverViewCard />
        <div className="mt-6">
          <WeatherInfoCard />
        </div>
        <div className="mt-8 mb-8 lg:mb-0">
          <DailyForecastCard />
        </div>
      </div>
      <div className="col-span-12 pb-10 lg:pb-0 lg:col-span-4">
        <HourlyCard />
      </div>
    </section>
  );
};

export default WeatherClientWrapper;
