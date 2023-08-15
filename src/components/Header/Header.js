import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.shadow}>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className={styles.heading}>
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className={styles.paragraph}>Nie wierz nam na słowo - sprawdź!</p>
          <a href="#offer">
            <button className={styles.offerButton}>Oferta</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
