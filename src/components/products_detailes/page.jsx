import styles from "@/styles/page";
import Image from "next/image";
import arrow1 from "../../../public/Assets/arrow1.svg";

const ProductDetails = ({ product }) => {
  return (
    <div className={`${styles.paddingX} flex xs:flex-row flex-col  text-[#5e5e5e] font-[500] `}>
      <div className="flex">
        home
        <Image src={arrow1} alt="icon" width={15} height={1} />
        shop <Image src={arrow1} alt="icon" width={15} height={1} />
      </div>
      <div className="flex">
        {product.category}{" "}
        <Image src={arrow1} alt="icon" width={15} height={1} />
        {product.name}
      </div>
    </div>
  );
};

export default ProductDetails;
