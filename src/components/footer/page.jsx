import footer_logo from "../../../public/Assets/logo_big.png";
import Image from "next/image";
import instagram from "../../../public/Assets/instagram_icon.png";
import pintester_icon from "../../../public/Assets/pintester_icon.png";
import whats_app from "../../../public/Assets/whatsapp_icon.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-20 flex-wrap ">
      <div className="flex justify-center items-center">
        <Link href="/shop" className="flex justify-center items-center">
        <Image src={footer_logo} alt="footer" />
        <p className="font-[400] ss:text-[40px] text-[18px] font-poppins">
          SHOPPER
        </p>
        </Link>
      </div>
      <ul className="flex ss:flex-row flex-col footer my-5 cursor-pointer">
        <li className="hover:font-[500]"><Link href="#">Company</Link></li>
        <li className="hover:font-[500]"><Link href="#">Products</Link></li>
        <li className="hover:font-[500]"><Link href="#">Office</Link></li>
        <li className="hover:font-[500]"><Link href="#">About</Link></li>
        <li className="hover:font-[500]"><Link href="#">Content</Link></li>
      </ul>
      <div className="flex  my-5 cursor-pointer">
        <Link href="https://www.instagram.com/" target="_blank"><Image src={instagram} alt="instagram" /></Link>
        <Link href="https://www.pinterest.com/" target="_blank"><Image src={pintester_icon} alt="pintester_icon" className="mx-8" /></Link>
        <Link href="https://www.whatsapp.com/" target="_blank"><Image src={whats_app} alt="whats_app" /></Link>
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
