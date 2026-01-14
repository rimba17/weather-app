"use client";
import { createContext } from "react";
import { useState, useEffect } from "react";
export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [isUnitOpen, setIsUnitOpen] = useState(false);
  const [unitType, setUnitType] = useState("metric");
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedDayDate, setSelectedDayDate] = useState("");
  const [isSelectDayOpen, setIsSelectDayOpen] = useState(false);
  const [selectedWeatherCode, setSelectedWeatherCode] = useState(null);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [isOpenSuggest, setIsOpenSuggest] = useState(false);
  const [isErrorFetch, setIsErrorFetch] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchProggress, setIsSearchProggress] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    name: "",
    country: "",
  });
  useEffect(() => {
    initialFetchFirst();
  }, []);

  const initialFetchFirst = async () => {
    setIsLoading(true);
    const lang = navigator.language.split("-")[0];
    let defaultCity = "";
    if (lang.startsWith("id")) {
      defaultCity = "Jakarta";
    } else if (lang.startsWith("en")) {
      defaultCity = "London";
    } else {
      defaultCity = "Tokyo";
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_GEOCODING_API}?name=${defaultCity}&count=5`
      );
      if (!res.ok) {
        setIsErrorFetch("Something went wrong");
        return;
      }
      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        setIsErrorFetch("City not found");
        return;
      }
      const { name, country, latitude, longitude } = data.results[0];
      setSelectedLocation({
        name,
        country: country ?? "Not registered",
      });
      searchFirstByLatLong(latitude, longitude);
    } catch (error) {
      setIsErrorFetch("Something went wrong");
    }
  };

  const searchFirstByLatLong = async (lat, long) => {
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
  const retryFetch = () => {
    setIsErrorFetch(null);
    initialFetchFirst();
  };
  return (
    <GlobalContext
      value={{
        isUnitOpen,
        setIsUnitOpen,
        unitType,
        setUnitType,
        selectedDayIndex,
        setSelectedDayIndex,
        selectedDayDate,
        setSelectedDayDate,
        isSelectDayOpen,
        setIsSelectDayOpen,
        resultSearch,
        setResultSearch,
        search,
        setSearch,
        isOpenSuggest,
        setIsOpenSuggest,
        selectedLocation,
        setSelectedLocation,
        weatherData,
        selectedWeatherCode,
        setSelectedWeatherCode,
        isLoading,
        retryFetch,
        isSearchProggress,
        setIsSearchProggress,
        setIsLoading,
        setIsErrorFetch,
        setSelectedDayDate,
        setSelectedWeatherCode,
        setWeatherData,
        isErrorFetch,
      }}
    >
      {children}
    </GlobalContext>
  );
}
