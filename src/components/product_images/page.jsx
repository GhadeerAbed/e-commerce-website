import React from "react";
import Image from "next/image";
const ProductImages = ({ images ,styles}) => {
  return (
    <div className={styles}>
      {images.map((image, i) => (
        <Image key={i} src={image} alt="image"  />
      ))}
    </div>
  );
};

export default ProductImages;
