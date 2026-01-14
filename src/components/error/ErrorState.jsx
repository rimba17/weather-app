"use client";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import ErrorIcon from "../icons/ErrorIcon";
import RetryIcon from "../icons/RetryIcon";
const ErrorState = ({ onRetry }) => {
  const { isErrorFetch } = useContext(GlobalContext);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <div>
          <ErrorIcon />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">{isErrorFetch}</h2>
        <p className="text-gray-400 mb-6 text-center">
          We couldn't connect to the server (API error). Please try again in a
          few moments.
        </p>
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-1 rounded-md bg-neutral-700 text-white cursor-pointer hover:bg-neutral-600"
        >
          <RetryIcon />
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
