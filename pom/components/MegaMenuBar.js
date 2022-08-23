import styles from "../styles/MegaMenuBar.module.css";
import Login_button from "./Login_button";

const MegaMenuBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.megaMenu}>
          <ul>
            {/* .........................logo................. */}
            <div className={styles.logo}>
              <img
                style={{ marginLeft: "-90px" }}
                src="/logo.png"
                width="100px"
                height="60px "
                alt="logo"
                margin="200px"
              ></img>

              <span
                style={{
                  color: "#4f7942",
                  fontFamily: "Alumni Sans Inline One",
                  fontSize: "30px",
                  margin: "1px",
                  padding: "10px",

                  bottom: "50px",
                }}
              >
                Property On Map
              </span>
            </div>

            {/* .........................logo end................. */}
            <div className={styles.navMenu}>
              <li>
                <a href="/">buy</a>
                <div className={styles.subMenu}>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "5px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>plot for sale</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "20px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>building for sale</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "10px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>duplex for sale</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "55px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all residential properties</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "55px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all commercial properties</p>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="/">rent</a>
                <div className={styles.subMenu}>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "5px" }}
                        src="/cartoon1.png"
                        alt="missing"
                      />
                      <p>plot for sale</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "20px" }}
                        src="/cartoon1.png"
                        alt="missing"
                      />
                      <p>building for sale</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "10px" }}
                        src="/cartoon1.png"
                        alt="missing"
                      />
                      <p>duplex for sale</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "55px" }}
                        src="/cartoon1.png"
                        alt="missing"
                      />
                      <p>all residential properties</p>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "55px" }}
                        src="/cartoon1.png"
                        alt="missing"
                      />
                      <p>all commercial properties</p>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="/">Add Property</a>
              </li>
              <li>
                <a href="/">blog</a>
              </li>
              <li>
                <a href="/">new projects</a>
              </li>
              <li>
                <a href="/">services</a>
              </li>
            </div>
            <Login_button title="Log in" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default MegaMenuBar;
