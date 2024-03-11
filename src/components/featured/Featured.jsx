import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Saksham Here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgcontainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            delectus repell
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            non quaerat, aperiam hic, error doloribus vitae veritatis amet
            laboriosam quod assumenda. Quos consequatur atque explicabo
            cupiditate nam ipsam exercitationem quisquam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Exercitationem quo earum
            temporibus cumque commodi dolore placeat ad ex modi, optio repellat,
            impedit molestias ea possimus autem laudantium esse. Aut, quo!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
