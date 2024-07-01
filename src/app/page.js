import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Elements on edge a Next Revolution</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris congue ipsum nec nisi auctor, ut posuere metus condimentum.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brand} />
      </div>
    </div>
    <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
  </div>
}

export default Home;
