import Image from "next/image";
import SearchSuggestion from "../search_suggestion/SearchSuggestion";
import SearchProgress from "../search_inprogress/SearchProgress";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
const Search = () => {
  const {
    search,
    setSearch,
    isSearchProggress,
    setIsSearchProggress,
    setIsErrorFetch,
    setResultSearch,
  } = useContext(GlobalContext);

  const handleSearch = async () => {
    setIsSearchProggress(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_GEOCODING_API}?name=${search}&count=5`
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
      setResultSearch(data.results);
    } catch (error) {
    } finally {
      setIsSearchProggress(false);
    }
  };
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="relative col-span-12 lg:col-start-4 lg:col-span-5 xl:col-start-4 xl:col-span-5">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Image
            src="/assets/images/icon-search.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
        <input
          type="text"
          value={search || ""}
          className="w-full px-5 py-3 pl-10 text-xl lg:text-base lg:py-2  bg-neutral-800 rounded-xl text-white cursor-pointer active:outline-white active:outline-1"
          placeholder="Search for a place..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {isSearchProggress && <SearchProgress />}
        <SearchSuggestion />
      </div>
      <div onClick={handleSearch} className="col-span-12 lg:col-span-3">
        <button className="w-full lg:w-fit px-5 py-3 text-xl lg:text-base lg:py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl text-white font-semibold cursor-pointer focus:ring-2 focus:border-black focus:border-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
