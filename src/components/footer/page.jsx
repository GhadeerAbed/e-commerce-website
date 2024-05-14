import footer_logo from "../../../public/Assets/logo_big.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquarePinterest,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const listFooter = ["Company", "Products", "Office", "About", "Content"];
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
      <ul className="flex ss:flex-row flex-col footer my-5 ">
        {listFooter.map((item, i) => {
          return (
            <>
              <li
                key={i}
                className="hover:font-[600] hover:text-[17px] cursor-pointer "
              >
                <Link href="#">{item}</Link>
              </li>
            </>
          );
        })}
      </ul>
      <div className="flex  my-5 cursor-pointer ">
        <Link href="https://www.instagram.com/" target="_blank" className="mx-3">
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="w-[30px] h-[30px] hover:text-[#e96fb2]"
          />
        </Link>
        <Link href="https://www.pinterest.com/" target="_blank" className="mx-3">
          <FontAwesomeIcon
            icon={faSquarePinterest}
            className="w-[30px] h-[30px] hover:text-[#E60124]"
          />
        </Link>
        <Link href="https://www.whatsapp.com/" target="_blank" className="mx-3">
          <FontAwesomeIcon
            icon={faSquareWhatsapp}
            className="w-[30px] h-[30px] hover:text-[#0CC143]"
          />
        </Link>
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
