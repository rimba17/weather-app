import Image from "next/image";
import drizzle from "../../../public/assets/images/icon-drizzle.webp";
const Drizzle = () => {
  return (
    <Image
      src={drizzle}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="drizzle-icon"
    />
  );
};

export default Drizzle;
