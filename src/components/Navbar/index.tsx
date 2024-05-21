"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import style from "./Navbar.module.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <Link id={style.navlogo} href="/">
          Vortres
        </Link>

        <div>
          <ul
            id={style.navbar}
            className={clicked ? style.mobileActive : style.mobile}
          >
            <li>
              <Link href="/creator">Creator</Link>
            </li>
            <li>
              <Link href="/player">Stats</Link>
            </li>
          </ul>
        </div>

        <div
          id={style.mobile}
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <FontAwesomeIcon
            icon={clicked ? faTimes : faBars} // Use the FontAwesome icons
            id={style.bar}
            size="2x"
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
