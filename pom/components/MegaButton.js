import styles from "../styles/MegaMenuBar.module.css";
import Link from "next/link";

const MegaButton = () => {
  return (
    <>
      <div className={styles.dropDiv}>
        <Link href="/">
          <button className={styles.btnDiv}>click meee</button>
        </Link>
      </div>
    </>
  );
};

export default MegaButton;
