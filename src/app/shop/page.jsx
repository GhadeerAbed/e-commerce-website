import Popular from '../../components/popular/page'
import Hero from '../../components/hero/page'
import styles from '../../styles/page'
import Offer from '../../components/offers/page'
import NewCollection from '../../components/new_collection/page'
import NewLetters from '../../components/new_letters/page'
const ShopPage = () => {
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}> 
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/> 
      <NewLetters/>
      </div>
    </div>
  )
}

export default ShopPage