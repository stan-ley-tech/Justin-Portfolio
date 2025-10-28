import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/">Justin</Link>
        </div>

        {/* Navigation menu */}
        <ul className={`${styles.navMenu} ${open ? styles.active : ""}`}>
          <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/resume">Resume</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/portfolio">Portfolio</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/achievements">Achievements</Link></li>
          <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger menu toggle */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;