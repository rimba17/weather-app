import Loading from "../icons/Loading";
const SearchProgress = () => {
  return (
    <div className="absolute bg-neutral-800 w-full top-16 lg:top-13 rounded-lg py-2">
      <div className="px-2 flex items-center gap-2">
        <Loading />
        <p>Search in progress</p>
      </div>
    </div>
  );
};

export default SearchProgress;
