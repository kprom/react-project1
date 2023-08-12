import Boxes from "./Boxes.js";
import offers from "../../data/offers.js";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <section id="offer" className={styles.offerSection}>
      <div className={styles.container}>
        <h2 className={styles.offerHeading}>Czym zajmuje się nasza firma?</h2>
        <div className={styles.boxes}>
          {offers.map((offer, index) => (
            <Boxes key={index} title={offer.title} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
