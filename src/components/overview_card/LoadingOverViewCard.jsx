import Loading from "../icons/Loading";
const LoadingOverViewCard = () => {
  return (
    <div className="min-h-72 max-h-64 lg:min-h-65 bg-neutral-700 px-6 py-14 rounded-2xl flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <Loading />
        <p>Loading..</p>
      </div>
    </div>
  );
};

export default LoadingOverViewCard;
