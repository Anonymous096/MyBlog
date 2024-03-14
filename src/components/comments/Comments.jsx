import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a Comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login"> Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Saksham Sharma</span>
              <span className={styles.date}>14.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            recusandae, voluptates modi aspernatur ipsam veniam assumenda
            ducimus sunt, reprehenderit tenetur nesciunt sed illo ut
            necessitatibus natus amet aperiam pariatur adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Saksham Sharma</span>
              <span className={styles.date}>14.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            recusandae, voluptates modi aspernatur ipsam veniam assumenda
            ducimus sunt, reprehenderit tenetur nesciunt sed illo ut
            necessitatibus natus amet aperiam pariatur adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Saksham Sharma</span>
              <span className={styles.date}>14.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            recusandae, voluptates modi aspernatur ipsam veniam assumenda
            ducimus sunt, reprehenderit tenetur nesciunt sed illo ut
            necessitatibus natus amet aperiam pariatur adipisci.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Saksham Sharma</span>
              <span className={styles.date}>14.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            recusandae, voluptates modi aspernatur ipsam veniam assumenda
            ducimus sunt, reprehenderit tenetur nesciunt sed illo ut
            necessitatibus natus amet aperiam pariatur adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
