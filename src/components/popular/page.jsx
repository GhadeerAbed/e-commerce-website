import data_product from "../../constant/data";
import Item from "../items/page";
import styles from "@/styles/page";
const Popular = () => {
  return (
    <div className={`${styles.paddingX} py-6 flex flex-col justify-center items-center mt-6`} >
      <div className="flex flex-col justify-center items-center">
      <h1 className={`${styles.heading2}`}>POPULAR IN WOMEN</h1>
      <hr className="w-[200px] h-[6px] bg-[#252525] rounded-[10px] "/>
      </div>
      <div className="flex flex-row gap-8 justify-center items-center mt-20 flex-wrap">
        {data_product.map((item ,i) => (
          <Item
            key={i}
            id={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
