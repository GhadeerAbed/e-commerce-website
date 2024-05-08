import React from "react";
import Button from "../button/page";
import styles from "../../styles/page";
import '../../app/globals.css'
const NewLetters = () => {
  return (
    <div
      className={`${styles.paddingX} py-10 flex flex-col justify-center items-center new_letters  m-auto`}
    >
      <div className="flex flex-col flex-wrap justify-center sm:items-center items-start w-full font-poppins">
        <h1 className="font-bold xs:text-[50px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] ">
          Get Exclusive Offers In Your Email
        </h1>
        <p className={`{${styles.paragraph} mt-2`}>
          Subscribe to our new letters and stay update
        </p>
        <div className="flex flex-1 sm:flex-row flex-col  mt-10 flex-wrap ">
          <input type="email" placeholder="Enter your Email" 
          className="bg-white border rounded-full pl-2 py-3  ss:w-[450px] w-[100%]   " />
          <Button  styles="bg-black text-white py-3 w-[152px] font-normal max-[830px]:ml-0 -ml-8 rounded-full outline-none max-[820px]:mt-5 mt-0" ><p className="pl-2">subscribe</p></Button>
        </div>
      </div>
    </div>
  );
};

export default NewLetters;
