import styles from "../styles/MegaMenuBar.module.css";
import MegaButton from "./MegaButton";
import Login_button from "./Login_button";
import Link from "next/link";

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
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>plot for sale</p>

                      <button>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>building for sale</p>

                      <button style={{ marginTop: "-20px" }}>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>duplex for sale</p>
                      <button>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all residential properties</p>
                      <button style={{ marginTop: "-20px" }}>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all commercial properties</p>
                      <button style={{ marginTop: "-20px" }}>sdkls</button>
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
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>plot for sale</p>

                      <button>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>building for sale</p>

                      <button style={{ marginTop: "-20px" }}>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>duplex for sale</p>
                      <button>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all residential properties</p>
                      <button style={{ marginTop: "-20px" }}>sdkls</button>
                    </a>
                  </div>
                  <div className={styles.col}>
                    <a href="/">
                      <img
                        style={{ marginLeft: "0px" }}
                        src="/Megaimg1.jpg"
                        alt="missing"
                      />
                      <p>all commercial properties</p>
                      <button style={{ marginTop: "-20px" }}>sdkls</button>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/Add_property">
                  <a>Add Property</a>
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/New_projects">
                  <a>new projects</a>
                </Link>
              </li>
              <li>
                <Link href="/Services">
                  <a>services</a>
                </Link>
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
