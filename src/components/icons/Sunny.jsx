import Image from "next/image";
import sunnyImg from "../../../public/assets/images/icon-sunny.webp";
const Sunny = () => {
  return (
    <Image
      src={sunnyImg}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="sunny-icon"
    />
  );
};

export default Sunny;
