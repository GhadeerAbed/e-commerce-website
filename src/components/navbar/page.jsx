"use client";
import Image from "next/image";
import logo from "../../../public/Assets/logo.png";
import cart_icon from "../../../public/Assets/cart_icon.png";
import menu from "../../../public/Assets/menu.svg";
import user from "../../../public/Assets/user.svg";
import { navLinks } from "@/constant/shopper_data";
import "../../app/globals.css";
import styles from "../../styles/page";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useItemsCart from "../../hook/page";

const Navbar = () => {
  const pathname = usePathname();
  const [open , setOpen] = useState(false)
  const {cartItems} = useItemsCart();
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} font-poppins`}>
      <div className={`${styles.boxWidth} `}>
        <nav className=" w-full flex justify-between items-center py-6">
          <div className="flex flex-row justify-center items-center">
            <Image src={logo} alt="beauty-logo" width={36} h={36} />
            <h1 className={"font-poppins font-semibold text-[24px]"}>
              SHOPPER
            </h1>
          </div>
          <ul className="md:flex hidden flex-row ">
            {navLinks?.map((navLink, i) => {
              const isActive = pathname.startsWith(navLink.href)
              return (
                <>
              <li
                key={navLink.id}
                className={`${i === navLink.length - 1 ? "mr-0" : "mr-10"} 
                ${isActive ?"border-active " :"a-hover"}`}
              >
                <a href={`${navLink.href} `} >{navLink.title}</a>
              </li>
              </>
            )})}
          </ul>
          <div className="flex flex-row justify-end items-center order-2">
            <button className='md:flex hidden py-2 px-8 font-medium text-[18px] border bg-transparent rounded-[20px] mx-6'>
               <a href="/login" >login</a>
              </button>
            <a href='/cart'><Image src={cart_icon} alt="cart" width={32} h={32} /></a>
            <span className="cart-count"><p className="ml-[4px] -mt-[2px]">0</p></span>
          </div>
          <div className="md:hidden flex flex-1 justify-end order-1 mr-6">
            <Image src={user} alt='user' width={29} height={29}/>
          </div>
          <div className="md:hidden flex  justify-end items-center order-3 ml-6">
            <Image src={menu} alt="menu" width={28} height={28} className="object-contain" onClick={()=>setOpen((prev)=>!prev)}/>
            <div className={`${open?"flex":"hidden"} card absolute right-0 top-20 max-w-[140px] mx-5 -mt-2 rounded-xl `}>
            <ul className="flex flex-col justify-center py-5 px-7 items-center ">
            {navLinks?.map((navLink, i) => {
              return (
                <>
              <li
                key={navLink.id}
                className='font-normal text-[16px] mb-5'
              >
                <a href={`${navLink.href} `} >{navLink.title}</a>
              </li>
              </>
            )})}
          </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
