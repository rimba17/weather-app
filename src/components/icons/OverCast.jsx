import Image from "next/image";
import overCast from "../../../public/assets/images/icon-overcast.webp";
const Overcast = () => {
  return (
    <Image
      src={overCast}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="overcast-icon"
    />
  );
};

export default Overcast;
