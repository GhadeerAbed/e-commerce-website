import footer_logo from "../../../public/Assets/logo_big.png";
import Image from "next/image";
import instagram from "../../../public/Assets/instagram_icon.png";
import pintester_icon from "../../../public/Assets/pintester_icon.png";
import whats_app from "../../../public/Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-20 flex-wrap ">
      <div className="flex justify-center items-center">
        <Image src={footer_logo} alt="footer" />
        <p className="font-[400] ss:text-[40px] text-[18px] font-poppins">
          SHOPPER
        </p>
      </div>
      <ul className="flex ss:flex-row flex-col  footer my-5 ">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Content</li>
      </ul>
      <div className="flex  my-5">
        <Image src={instagram} alt="instagram" />
        <Image src={pintester_icon} alt="pintester_icon" className="mx-8" />
        <Image src={whats_app} alt="whats_app" />
      </div>
      <div className="my-10   ">
        <hr className="ss:flex hidden h-[3px] bg-[#c7c7c7]  " />
        <p className="mt-5 ss:pl-0 pl-2">
          Copyright @ 2024 - All Right Reversed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
