
import arrow2 from "../../../public/Assets/arrow2.svg";
import Hand from "../../../public/Assets/hand_icon.png";
import hero_image from "../../../public/Assets/hero_image.png";
import Image from "next/image";
import styles from "../../styles/page";
import { layout } from "../../styles/page";
import Button from "../button/page";
const Hero = () => {
  return (
    <section className={`${styles.paddingX}  ${layout.section} hero `}>
      <div className={`${layout.sectionInfo}`}>
        <p className={`${styles.paragraph}`}>NEW ARRIVALS ONLY</p>
        <div className="flex">
          <p className={`${styles.heading1} mr-2`}>new</p>
          <Image src={Hand} alt="hello" height={40} width={40} />
        </div>
        <p className={`${styles.heading1}`}>
          Collections
          <br className="sm:block hidden" /> For Everyone
        </p>
        <Button styles="mt-10 bg-secondary text-white flex"> 
        <p>latest Collection</p>
        <Image src={arrow2} alt="arrow1" width={30} height={15} className="ml-2"/>
        </Button>
      </div>
      <div className={`${layout.sectionImg}`}>
        <Image src={hero_image} alt="my" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;
