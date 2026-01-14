const HourlyLoading = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-neutral-700 p-2 rounded-lg mt-2 flex gap-2 items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 lg:h-8 lg:w-8"></div>
            <p className="text-xl font-normal lg:font-semibold lg:text-base"></p>
          </div>
          <p className="text-xl lg:text-base"></p>
        </div>
      ))}
    </>
  );
};

export default HourlyLoading;
