import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.paragraph}>
          Ślub Twoich Marzeń - wszelkie prawa zastrzeżone, 2023
        </p>
        <div className={styles.iconsDiv}>
          <FontAwesomeIcon icon={faInstagram} color="#ffffff" />
          <FontAwesomeIcon icon={faFacebook} color="#ffffff" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
