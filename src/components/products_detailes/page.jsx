import styles from "@/styles/page";
import Image from "next/image";
import arrow1 from "../../../public/Assets/arrow1.svg";

const ProductDetails = ({ product }) => {
  return (
    <div className={`${styles.paddingX} flex xs:flex-row flex-col  text-[#5e5e5e] font-[500] `}>
      <div className="flex">
        <span className="pr-1">Home</span> 
        <Image src={arrow1} alt="icon" width={9} height={9} />
        <span className="px-1">Shop</span> 
        <Image src={arrow1} alt="icon" width={9} height={9} />
      </div>
      <div className="flex capitalize">
      <span className="px-1">{product.category}</span>
        <Image src={arrow1} alt="icon" width={9} height={9} />
        <span className="px-1">{product.name}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
