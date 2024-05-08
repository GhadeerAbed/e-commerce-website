import styles from '../../styles/page'
import ShopCategory from "../../components/shop_category/page";
import banner_women from "../../../public/Assets/banner_women.png";
const WomansPage = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ShopCategory category="women" img={banner_women} />
      </div>
    </div>
  );
};

export default WomansPage;
