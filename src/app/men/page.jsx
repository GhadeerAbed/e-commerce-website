import styles from '../../styles/page'
import banner_mens from '../../../public/Assets/banner_mens.png'
import ShopCategory from '../../components/shop_category/page'
const MensPage = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <ShopCategory category='men' img={banner_mens}/>
      </div>
    </div>
  )
}

export default MensPage