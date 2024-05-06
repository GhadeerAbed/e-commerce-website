import React from 'react'
import ShopCategory from '../../components/shop_category/page'
import banner_women from '../../../public/Assets/banner_women.png'
const WomansPage = () => {
  return (
    <div>
      <ShopCategory category='women' img={banner_women}/>
    </div>
  )
}

export default WomansPage