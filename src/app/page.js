import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  
  return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>INNOVATIVE IDEA AGENCY</h1>
          <p className={styles.desc}>lorem ipsum Donec hendrerit dictum ridiculus sagittis nisi aliquam at vehicula mattis pulvinar maecenas sit duis platea inceptos et ante hendrerit leo.</p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/image.gif" alt="" fill  />
        </div>
      </div>
  )
}

export default Home;