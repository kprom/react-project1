import styles from "./Experts.module.css";
import firstWoman from "../../images/woman1.jpg";
import secondWoman from "../../images/woman2.jpg";
import manImage from "../../images/man.jpg";

const Experts = () => {
  return (
    <section id="about" className={styles.experstSection}>
      <div className="container">
        <h2 className={styles.heading}>Nasi specjaliści</h2>
        <ul className={styles.expertsList}>
          <li className={styles.expert}>
            <img
              src={firstWoman}
              className={styles.image}
              alt="zdjęcie Agaty Agaty"
            />
            <div className={styles.expertInfo}>
              <h3>Agata Agata [Konsultant Ślubny]</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                adipisci voluptatum doloribus assumenda voluptate ipsa earum
                molestias maiores quidem temporibus a incidunt minus, ex vel,
                fugit exercitationem quam at dolorem!
              </p>
            </div>
          </li>
          <li className={`${styles.expert} ${styles.reversed}`}>
            <img
              src={manImage}
              className={styles.image}
              alt="zdjęcie Bartka Bartka"
            />
            <div className={styles.expertInfo}>
              <h3>Bartek Bartek [Dekorator]</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quasi unde odit quia incidunt ex mollitia soluta, quaerat sunt
                asperiores commodi nostrum, reprehenderit voluptates laborum,
                atque veniam maxime eos sint.
              </p>
            </div>
          </li>
          <li className={styles.expert}>
            <img
              src={secondWoman}
              className={styles.image}
              alt="Zdjęcie Celiny Celiny"
            />
            <div className={styles.expertInfo}>
              <h3>Celina Celina [Mistrzyni Ceremonii]</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                inventore tempore, deleniti ipsa, ea quasi dolorem officiis
                accusamus quis hic magnam natus nulla ratione at enim ullam
                culpa? Quibusdam, quasi?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experts;
