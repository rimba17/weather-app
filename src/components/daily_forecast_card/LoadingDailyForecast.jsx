const LoadingDailyForecast = () => {
  return (
    <>
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="bg-neutral-700 col-span-4 rounded-lg flex flex-col items-center px-2 py-2 lg:col-span-1 lg:py-3 lg:px-1 lg:gap-2"
        >
          <p className="text-base font-medium lg:text-sm lg:font-normal"></p>
          <div className="min-h-32 w-20 lg:w-16 lg:min-h-24"></div>
          <div className="flex justify-between w-full">
            <div>
              <p className="text-base lg:text-xs font-semibold"></p>
            </div>
            <div>
              <p className="text-base lg:text-xs font-semibold"></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingDailyForecast;
