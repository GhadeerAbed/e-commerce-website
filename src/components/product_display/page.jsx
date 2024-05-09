"use client";
import React, { useContext ,useEffect} from "react";
import star_icon from "../../../public/Assets/star_icon.png";
import Image from "next/image";
import ProductImages from "../../components/product_images/page";
import { layout } from "../../styles/page";
import styles from "../../styles/page";
import { ShopContext } from "../../context/ShopContext";


const ProductDisplay = ({ product }) => {
  const contextValue = useContext(ShopContext);
  const { addToCart } = contextValue || {};
  const {cartItems}= useContext(ShopContext);



  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className={`${layout.section} ${styles.paddingX} font-poppins `}>
      <div
        className={` flex flex-1 justify-center md:items-start items-center flex-col md:mt-0 mt-10 relative`}
      >
        <div className="flex md:flex-row  flex-col  gap-5 ">
          <div className=" xs:flex hidden ">
            <ProductImages
              images={[
                product.image,
                product.image,
                product.image,
                product.image,
              ]}
              styles="max-w-[114px] max-h-[115px] flex md:flex-col flex-row sm:gap-3 gap-6"
            />
          </div>
          <div>
            <Image src={product.image} alt="image" width={490} height={410} />
          </div>
        </div>
      </div>
      <div
        className={` flex flex-1 justify-start items-start flex-col md:mt-2 mt-10 pl-5 `}
      >
        <h1 className="text-[#3d3d3d] text-[35px] font-bold">{product.name}</h1>
        <div className="flex justify-center items-center text-[#1c1c1c] gap-3 my-4">
          <ProductImages
            images={[star_icon, star_icon, star_icon, star_icon, star_icon]}
            styles=" flex flex-row gap-1 "
          />
          <p>(122)</p>
        </div>
        <div className="flex font-[600] text-[24px] gap-7">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141] ">${product.new_price}</div>
        </div>
        <div className="my-4">
          A lightweight , usually knitted , plover shirt , close fitting and
          short, A lightweight usually knitted , plover shirt close fitting and
          short.
        </div>
        <div className="my-4">
          <h1 className="text-[#656565] text-[20px] font-[500]">Select Size</h1>
          <ul className="flex gap-5 mt-2">
            {sizes.map((size, index) => (
              <li
                key={index}
                className="cursor-pointer bg-[#fbfbfb] border border-[#ebebeb] rounded-[5px] p-3"
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-[#ff4141] w-[200px] border text-white py-3
         rounded-full outline-none cursor-pointer my-5"
          onClick={() =>{
            addToCart(product.id)
          } }
        >
          ADD TO CART
        </button>
        <p className="mt-5">
          <span className="font-[600] font-poppins">Category : </span> Women ,
          T-Shirt , Crop Top
        </p>
        <p className="my-3">
          <span className="font-[600] font-poppins">Tags : </span> Modern ,
          Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
