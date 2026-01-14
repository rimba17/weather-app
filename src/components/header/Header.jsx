"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContextProvider";
import UnitsCard from "../units_card/UnitsCard";
import Image from "next/image";
const Header = () => {
  const { isUnitOpen, setIsUnitOpen } = useContext(GlobalContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-900 py-4 lg:py-6 ${
        isScrolled ? "border-b border-neutral-500" : ""
      }`}
    >
      <div className="mx-auto max-w-container px-4 lg:px-20">
        <div className="flex justify-between items-center">
          <div className="relative w-36 h-15 lg:w-40 lg:h-10">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <button
              onClick={() => setIsUnitOpen((prev) => !prev)}
              className="flex items-center text-sm gap-2 bg-neutral-800 px-3 py-2 rounded-xl cursor-pointer focus:outline-white focus:outline-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                className="w-4 h-4 inline-block align-middle shrink-0"
              >
                <path
                  fill="#fff"
                  d="M14.125 7.406c.031.407.031.813 0 1.188l1 .594a.74.74 0 0 1 .344.843c-.344 1.313-1.063 2.5-2 3.469-.25.219-.625.281-.906.125l-1-.594c-.25.188-.72.469-1.032.594v1.156a.733.733 0 0 1-.562.719A7.765 7.765 0 0 1 6 15.5c-.313-.063-.563-.406-.563-.719v-1.156a5.54 5.54 0 0 1-1.03-.594l-1 .594c-.282.156-.657.094-.907-.125-.938-.969-1.656-2.156-2-3.469a.74.74 0 0 1 .344-.844l1-.593c-.032-.156-.032-.406-.032-.594 0-.156 0-.406.032-.594l-1-.562A.74.74 0 0 1 .5 6c.344-1.313 1.063-2.5 2-3.469.25-.219.625-.281.906-.125l1 .594c.25-.188.719-.469 1.032-.594V1.25c0-.344.218-.625.562-.719a7.766 7.766 0 0 1 3.969 0c.312.063.562.406.562.719v1.156c.313.125.781.406 1.031.594l1-.594c.282-.156.657-.094.907.125.937.969 1.656 2.156 2 3.469a.74.74 0 0 1-.344.844l-1 .562Zm-1.656 2c.25-1.312.25-1.469 0-2.781l1.375-.781c-.188-.563-.688-1.375-1.063-1.813l-1.375.782c-.969-.844-1.125-.938-2.375-1.375V1.843C8.75 1.812 8.281 1.75 8 1.75c-.313 0-.781.063-1.063.094v1.593c-1.25.438-1.375.532-2.375 1.376L3.188 4.03c-.468.532-.812 1.157-1.062 1.813l1.375.781c-.25 1.313-.25 1.469 0 2.781l-1.375.781c.188.563.688 1.376 1.063 1.813l1.374-.781c.97.844 1.125.937 2.375 1.375v1.594c.282.03.75.093 1.063.093.281 0 .75-.062 1.031-.094v-1.593c1.25-.438 1.375-.531 2.375-1.375l1.375.781c.375-.438.875-1.25 1.063-1.813l-1.375-.78ZM8 5c1.625 0 3 1.375 3 3 0 1.656-1.375 3-3 3a3 3 0 0 1-3-3c0-1.625 1.344-3 3-3Zm0 4.5A1.5 1.5 0 0 0 9.5 8c0-.813-.688-1.5-1.5-1.5A1.5 1.5 0 0 0 6.5 8c0 .844.656 1.5 1.5 1.5Z"
                />
              </svg>
              <span className="align-middle">Units</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="8"
                fill="none"
                viewBox="0 0 13 8"
                className="w-4 h-4 inline-block align-middle shrink-0"
              >
                <path
                  fill="#fff"
                  d="M6.309 7.484 1.105 2.316c-.175-.14-.175-.421 0-.597l.704-.668a.405.405 0 0 1 .597 0l4.219 4.148 4.184-4.148c.175-.176.457-.176.597 0l.703.668c.176.176.176.457 0 .597L6.906 7.484a.405.405 0 0 1-.597 0Z"
                />
              </svg>
            </button>

            <div
              className={`relative transition-all duration-300 ease-out delay-75 ${
                isUnitOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <UnitsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
