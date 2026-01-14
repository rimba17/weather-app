import Image from "next/image";
import snow from "../../../public/assets/images/icon-snow.webp";
const Snow = () => {
  return (
    <Image
      src={snow}
      width={100}
      height={100}
      className="w-full h-auto"
      alt="snow-icon"
    />
  );
};

export default Snow;
