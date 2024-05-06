import new_collections from "../../constant/new_collections";
import Item from "../items/page";
import styles from "@/styles/page";

const NewCollection = () => {
  return (
    <div className={`${styles.paddingX} py-6 flex flex-col justify-center items-center px-20 md:ml-10`} >
      <div className="flex flex-col justify-center items-center">
      <h1 className={`${styles.heading2}`}>NEW COLLECTION</h1>
      <hr className="w-[200px] h-[6px] bg-[#252525] rounded-[10px] "/>
      </div>
      <div className="flex flex-row gap-8 mt-20 flex-wrap">
        {new_collections.map((item ,i) => (
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

export default NewCollection;
