import React from "react";
import Image from "next/image";
const ProductImages = ({ images}) => {
  return (
    <div>
      {images.map((image, i) => (
        <Image key={i} src={image} alt="image" />
      ))}
    </div>
  );
};

export default ProductImages;
