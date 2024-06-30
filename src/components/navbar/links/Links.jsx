"use client";
import React from "react";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contacts", path: "/contacts" },
    { title: "Blog", path: "blog" },
  ];

  const session = true;
  const isAdmin = true;

  const sessionControlLinks = (
    <>
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </>
  );

  const mobileMenu = (
    <>
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {sessionControlLinks}
      </div>
      {mobileMenu}
    </div>
  );
};

export default Links;
