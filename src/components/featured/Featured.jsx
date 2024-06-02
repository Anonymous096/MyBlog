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
            Welcome to Mind Canvas, A blog by Saksham Sharma. the daily diary
            and tech knowledge
          </h1>
          <p className={styles.postDesc}>
            Mind Canvas is created to document my personal thoughts and to share
            the knowledge about the modern tech and Programming things. The tech
            stack that is used here is Next Js a react framework and MongoDb and
            prisma for database and firebase for writing or creating the blog.
            For backend the tech stack that is used is Next Js itself and
            firebase. In my mind canvas you can see the posts descriptions
            inside a paragraph tag its because you are reading the mind of a
            coder. just kidding guys its a bug will be fixed soon hehe... The
            design is inspired by Medium.com
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
