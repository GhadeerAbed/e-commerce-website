import Image from "next/image";
import arrow3 from "../../../public/Assets/arrow3.svg";
import all_product from "../../constant/all_product";
import Item from "../items/page";
import "../../app/globals.css";
import Button from "../button/page";

const ShopCategory = ({ img, category }) => {
  return (
    <div className="sm:mx-16 mx-6">
      <Image src={img} alt="img" className="block w-[85%] " />
      <div className="flex xs:flex-row  flex-col  justify-between xs:items-center items-start mt-12">
        <p>
          <span className="font-bold">Showing 1-12</span> out of 36 products
        </p>
        <div className="border border-[#ccc] rounded-[40px] px-3 py-1 flex xs:mt-0 mt-2">
          Sort by
          <Image src={arrow3} alt="dropdown_icon" width={20} height={2} />
        </div>
      </div>
      <div className="flex flex-row flex-wrap mt-5 justify-center items-center xl:gap-8 gap-4">
        {all_product.map((item, i) => {
          if (category === item.category) return <Item key={i} {...item} />;
        })}
      </div>
      <div className="flex justify-center items-center ">
        <Button styles="bg-[#ededed] text-[#787878] my-20 px-10 rounded-full font-[500] hover:text-[#ff4141] ">
          Explore more
        </Button>
      </div>
    </div>
  );
};

export default ShopCategory;
