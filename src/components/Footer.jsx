import { FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className={styles.icon} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
          <FaXTwitter className={styles.icon} />
        </a>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Justin Atoyebi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
