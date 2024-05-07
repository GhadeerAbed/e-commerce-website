import data_product from "../../constant/data";
import Item from "../items/page";
import styles from "../../styles/page";

const RelatedProduct = () => {
  return (
    <div className={`${styles.paddingX} py-6 flex flex-col justify-center items-center mt-28`} >
      <div className="flex flex-col justify-center items-center">
      <h1 className={`${styles.heading2}`}>Related Product</h1>
      <hr className="w-[200px] h-[6px] bg-[#252525] rounded-[10px] "/>
      </div>
      <div className="flex flex-row gap-8 mt-20 flex-wrap">
        {data_product.map((item ,i) => (
          <Item
            key={i}
            id={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct