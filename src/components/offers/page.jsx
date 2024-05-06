
import Button from '../button/page'
import Image from 'next/image'
import exclusive from '../../../public/Assets/exclusive_image.png'
import '../../app/globals.css'
import styles from '@/styles/page'
import {layout} from '@/styles/page'

const Offer = () => {
  return (
    <section className={` ${layout.section} max-w-[85%] flex m-auto offer md:px-20 px-3`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading1}`}>Exclusive</h1>
        <h2 className={`${styles.heading1} mt-1`}>Offer For You </h2>
        <h3 className={`${styles.paragraph} mt-2` }>ONLY ON BEST SELLERS PRODUCTS </h3>
        <Button styles='bg-secondary font-poppies text-white px-20 mt-5 ml-3'>Check Now</Button>
      </div>
      <div className={`${layout.sectionImg}`}>
        <Image src={exclusive} alt="girl"/>
      </div>
    </section>
  )
}

export default Offer