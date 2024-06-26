import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

export const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <div className={styles.github}>
          <Image src="/github-mark.png" alt="tiktok" width={24} height={24} />
        </div>
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Mind Canvas</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default navbar;
