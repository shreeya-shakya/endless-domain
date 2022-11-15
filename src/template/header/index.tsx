import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "reactstrap";
import styles from "styles/Header.module.scss";

const Header = () => {
  const ROUTER = useRouter();

  return (
    <>
      {" "}
      <header className={`${styles.header}`} id="header">
        <div className={`container`}>
          <nav className={`${styles.nav} ${styles.nav_container}`}>
            <Link href="/" className={styles.nav__logo}>
              <Image
                src="/logo.png"
                alt="Endless Domain Logo"
                height={50}
                width={150}
              />
            </Link>

            <div className={styles.nav__burger} id="nav-burger">
              {/* <i className="ri-menu-line"></i> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </div>

            <div className={styles.nav__menu} id="nav-menu">
              <div className={styles.nav__close} id="nav-close">
                {/* <i className="ri-close-line"></i> */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M3,3 L21,21 M3,21 L21,3"
                  ></path>
                </svg>
              </div>

              <ul className={`mb-0 ${styles.nav__lists_primary}`}>
                <li className={styles.nav__item}>
                  <a onClick={() => ROUTER.push("/#aboutUs")} className={styles.nav__link}>
                    About Us
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a onClick={() => ROUTER.push("/#aboutUs")} className={styles.nav__link}>
                    Services & Vision
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a onClick={() => ROUTER.push("/#support")} className={styles.nav__link}>
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* {ROUTER.pathname !== "/search" && (
              <Button href="#" className={styles.nav__link_btn} tag="a">
                Explore
              </Button>
            )} */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
