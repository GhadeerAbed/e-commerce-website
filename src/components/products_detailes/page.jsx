import styles from "@/styles/page";
import Image from "next/image";
import arrow1 from "../../../public/Assets/arrow1.svg";

const ProductDetails = ({product}) => {
  return (
   
    <div className={`${styles.paddingX} flex`}>
      HOME<Image src={arrow1} alt="icon" /> SHOP{" "}
      <Image src={arrow1} alt="icon" />
      {product.category}
      <Image src={arrow1} alt="icon" />
      {product.name}
    </div>
    
  );
};

export default ProductDetails;
