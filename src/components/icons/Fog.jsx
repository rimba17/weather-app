import Image from "next/image";
import fog from "../../../public/assets/images/icon-fog.webp";
const Fog = () => {
  return (
    <Image
      src={fog}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="fog-icon"
    />
  );
};

export default Fog;
