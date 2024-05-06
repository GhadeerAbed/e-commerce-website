import React, { useContext } from "react";
import ProductDetails from "../../../components/products_detailes/page";
import ProductDisplay from "../../../components/product_display/page";
import all_product from "../../../constant/all_product";

const Products = ({ params }) => {
  const product = all_product.find((e) => e.id === Number(params.productid));

  return (
    <div>
      <ProductDetails product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Products;
