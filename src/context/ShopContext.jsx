"use client"
import React, { createContext } from 'react'
import all_product from '@/constant/all_product'

export const ShopContext = createContext('')

const ShopContextProvider = ({children})=>{

   const ContextValue = {all_product}

   return (
        <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
   )
}

export default ShopContextProvider;