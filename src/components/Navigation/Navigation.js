import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={`${styles.container} ${styles.navContainer}`}>
        <p className={styles.companyName}>Ślub Twoich Marzeń</p>
        <ul className={styles.navItems}>
          <li className={styles.listItem}>
            <a className={styles.website} href="#about">
              o nas
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.website} href="#offer">
              oferta
            </a>
          </li>
          <li className={styles.listItem}>
            <span className={styles.disabled}>kontakt</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
