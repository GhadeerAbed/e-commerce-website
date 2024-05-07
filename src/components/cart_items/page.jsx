"use client";

import Image from "next/image";
import remove_icon from "../../../public/Assets/cart_cross_icon.png";
import all_product from "@/constant/all_product";
import { ShopContext } from "../../context/ShopContext";
import { useContext , useEffect} from "react";

const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);



  return (
    <div>
      <div>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div>
                <div>
                  <Image src={e.image} alt="image" />
                  <p>{e.name}</p>
                  <p>{e.new_price}</p>
                  <button>{cartItems[e.id]}</button>
                  <p className="totalPrice">{e.new_price * cartItems[e.id]} </p>
                  <Image
                    src={remove_icon}
                    alt=""
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
