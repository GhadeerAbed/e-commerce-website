import React from 'react'
import banner_mens from '../../../public/Assets/banner_mens.png'
import ShopCategory from '../../components/shop_category/page'
const MensPage = () => {
  return (
    <div>
      <ShopCategory category='men' img={banner_mens}/>
    </div>
  )
}

export default MensPage