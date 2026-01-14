import Image from "next/image";
import partlyCloudy from "../../../public/assets/images/icon-partly-cloudy.webp";
const PartlyCloudy = () => {
  return (
    <Image
      src={partlyCloudy}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="partlyCloudy-icon"
    />
  );
};

export default PartlyCloudy;
