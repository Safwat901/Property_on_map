import styles from "../styles/DashBoard.module.css";

const DashLefNav = () => {
  return (
    <>
      <div className={styles.navcontainer}>
        <div className={styles.logo}>
          <h2>Property On Map</h2>
        </div>
        <div className={styles.wrapper}>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
            <li>
              <a href="/">Library</a>
            </li>
            <li>
              <a href="/">Favourite</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <a href="/">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashLefNav;
