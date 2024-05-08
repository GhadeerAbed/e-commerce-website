import React from "react";
import banner_kids from "../../../public/Assets/banner_kids.png";
import ShopCategory from "../../components/shop_category/page";
import styles from '../../styles/page'
const KidsPage = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ShopCategory category="kid" img={banner_kids} />
      </div>
    </div>
  );
};

export default KidsPage;
