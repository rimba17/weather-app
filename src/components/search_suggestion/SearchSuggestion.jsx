"use client";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
const SearchSuggestion = () => {
  const {
    resultSearch,
    setResultSearch,
    setSearch,
    setIsLoading,
    setIsErrorFetch,
    setSelectedDayDate,
    setSelectedWeatherCode,
    setWeatherData,
    setSelectedLocation,
  } = useContext(GlobalContext);
  const handleSearch = async (data) => {
    const { latitude, longitude, name, country } = data;
    setSearch(data.name);
    setResultSearch([]);
    console.log({ data });
    setSelectedLocation({
      name,
      country: country ?? "Not registered",
    });
    searchByLatLong(latitude, longitude);
  };

  const searchByLatLong = async (lat, long) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEATHER_API}?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode,apparent_temperature,relativehumidity_2m,windspeed_10m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      if (!res.ok) {
        setIsErrorFetch("Something went wrong");
        return;
      }
      const data = await res.json();
      setSelectedDayDate(data.daily.time[0]);
      setSelectedWeatherCode(data.daily.weathercode[0]);
      setWeatherData(data);
    } catch (error) {
      setIsErrorFetch("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {resultSearch.length > 1 && (
        <div className="absolute bg-neutral-800 w-full top-16 lg:top-12 rounded-lg p-2">
          {resultSearch.map((data, index) => (
            <div key={index} className="hover:bg-neutral-500 hover:rounded-md">
              <button
                className="cursor-pointer w-full text-start py-1 px-2"
                onClick={() => handleSearch(data)}
              >
                {data.name} - {data?.country ?? "Not Available"}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchSuggestion;
