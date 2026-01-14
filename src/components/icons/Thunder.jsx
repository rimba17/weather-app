import Image from "next/image";
import thunder from "../../../public/assets/images/icon-storm.webp";
const Thunder = () => {
  return (
    <Image
      src={thunder}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="thunder-icon"
    />
  );
};

export default Thunder;
