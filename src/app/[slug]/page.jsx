import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Saksham Sharma</span>
              <span className={styles.date}>14.03.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, temporibus debitis? Corporis labore, voluptatibus
              maxime modi aut suscipit excepturi. Veniam veritatis provident
              dolorem sequi vel! Suscipit consequatur recusandae soluta
              dignissimos?
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              autem tempore voluptas nam vero inventore natus laudantium porro
              voluptates laboriosam, saepe impedit distinctio libero animi, vel
              dolore ut voluptatibus velit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur eligendi eveniet et possimus amet, quis impedit! Nisi,
              quo? Ad, doloremque corrupti nostrum cum enim exercitationem
              obcaecati dolores non? Possimus, facere?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
