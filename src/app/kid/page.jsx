import React from 'react'
import banner_kids from '../../../public/Assets/banner_kids.png'
import ShopCategory from '../../components/shop_category/page'
const KidsPage = () => {
  return (
    <div>
      <ShopCategory category='kid' img={banner_kids}/>
    </div>
  )
}

export default KidsPage