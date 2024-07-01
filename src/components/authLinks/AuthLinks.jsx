"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";
import { useSession, SessionProvider, signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  return (
    <>
      {status == "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            LogOut
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>LogOut</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

const WrappedLoginPage = ({ session }) => (
  <SessionProvider session={session}>
    <AuthLinks />
  </SessionProvider>
);

export default WrappedLoginPage;
