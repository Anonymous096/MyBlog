import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.03.2024 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eos nihil eveniet velit modi quam quasi ea debitis iure. Neque quae consequuntur quo vitae porro provident deleniti dolorem non iusto!
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card