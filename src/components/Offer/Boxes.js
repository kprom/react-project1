import styles from "./Boxes.module.css";

const Boxes = ({ title, isNew }) => {
  return (
    <div
      className={`${styles.offerBoxes} ${
        isNew ? styles.specialBox : styles.regularBox
      }`}
    >
      <p className={styles.paragraph}>{title}</p>
      {isNew && <div className={styles.circle}></div>}
      {isNew && <p className={styles.circleParagraph}>(nowość)</p>}
    </div>
  );
};

export default Boxes;
