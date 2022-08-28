import styles from "../styles/Button1.module.css";
import Link from "next/link";

const Button1 = () => {
  return (
    <>
      <div className={styles.divBtn}>
        <Link href="/Login">
          <button className={styles.btn}>Call</button>
        </Link>
        <Link href="/Login">
          <button className={styles.btn}>Email</button>
        </Link>
      </div>
    </>
  );
};

export default Button1;
