"use client";
import React, { useState } from "react";
import ProductDetails from "../../../components/products_detailes/page";
import ProductDisplay from "../../../components/product_display/page";
import DescriptionBox from "../../../components/descriptions_box/page";
import all_product from "../../../constant/all_product";
import RelatedProduct from "../../../components/related_product/page";
import styles from "../../../styles/page";



const Products = ({ params }) => {
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  const product = all_product.find((e) => e.id === Number(params.productid));

  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ProductDetails product={product} />
        <ProductDisplay
          product={product}
        />
        <DescriptionBox />
        <RelatedProduct />
      </div>
    </div>
  );
};

export default Products;
