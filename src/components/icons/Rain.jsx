import Image from "next/image";
import rain from "../../../public/assets/images/icon-rain.webp";
const Rain = () => {
  return (
    <Image
      src={rain}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="rain-icon"
    />
  );
};

export default Rain;
