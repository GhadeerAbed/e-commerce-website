import Image from 'next/image'
import Link from 'next/link'
const Item = ({image,name,new_price,old_price,id}) => {
  return (
    <div className='item '>
      <Link href={`/products/${id}`}><Image src ={image} alt='image ' width={300}/></Link>
      <p className="font-poppins font-[500] text-[18px] mt-2">{name}</p>
      <div className=' text-[18px] flex gap-4'>
        <div className='text-[#374151] font-[600] '>{new_price}</div>
        <div className='text-[#8c8c8c] font-[500] line-through ' >{old_price}</div>
      </div>
    </div>
  )
}

export default Item