"use client";

import Image from "next/image";
import remove_icon from "../../../public/Assets/cart_cross_icon.png";
import all_product from "@/constant/all_product";
import { ShopContext } from "../../context/ShopContext";
import { useContext, useEffect } from "react";
import styles from "@/styles/page";
import "../../app/globals.css";

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);


  return (
    <div
      className={`${styles.paddingX} flex flex-col justify-center my-20  font-poppins`}
    >
      <div className="grid-container-header  text-[20px] font-[500]">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="sm:block hidden" />
      {all_product.map((e,i) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div key={i} >
                <div className="grid-container my-3">
                  <Image src={e.image} alt="image" />
                  <p>
                    <span className="">Title: </span>
                    {e.name}
                  </p>
                  <p>
                    <span>Price:</span>${e.new_price}
                  </p>
                  <button className="flex sm:gap-0 gap-1">
                    <span>Quantity:</span>
                    <p className="w-[35px] border-2 bg-[#fff] border-[#ebebeb]">
                      {cartItems[e.id]}
                    </p>
                  </button>
                  <p className="totalPrice">
                    <span>Total: </span>${e.new_price * cartItems[e.id]}{" "}
                  </p>
                  <Image
                    src={remove_icon}
                    alt=""
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    className="cursor-pointer "
                  />
                </div>
                <hr />
              </div>
            </>
          );
        }
      })}
      <div className="flex md:flex-row flex-col mt-20 font-poppins gap-10">
        <div className="flex-1 flex flex-col gap-10 ">
          <h1 className="font-bold text-[30px]">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-5 ">
              <p>subTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <p>Shopping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-5">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="bg-[#ff5a5a] text-white max-w-[262px] h-[58px] border-none outline-none cursor-pointer rounded-[15px] hover:bg-[#d21d1d]">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 ">
          <p className="text-[#555]">
            If you have a promo code ,Enter it here{" "}
          </p>

          <div className="max-w-[504px] h-[58px] bg-[#eaeaea] mt-5 pl-5 flex flex-row ">
            <input
              type="text"
              placeholder="promo code"
              className="border-none outline-none w-[330px] h-[50px] bg-transparent"
            />
            <button className="w-[170px] h-[58px] bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
