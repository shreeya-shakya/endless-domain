import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Input, Row } from "reactstrap";
import styles from "styles/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer_bg}>
        <div className="container">
          <Row>
            <Col lg={4} className="position-relative">
              <Link href="/" className={styles.footer__logo}>
                <Image
                  src="/logo-invert.png"
                  alt="Footer Logo"
                  width={235}
                  height={75}
                />
              </Link>
              <div className={`${styles.social_media}`}>
                <svg
                  stroke="white"
                  fill="white"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
                <svg
                  stroke="white"
                  fill="white"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="28px"
                  width="28px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                </svg>
                {/* <Image
                  src="/icons/linkedIn.svg"
                  height={24}
                  width={24}
                  alt="LinkedIn Icon"
                /> */}
                <svg
                  stroke="white"
                  fill="white"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="28px"
                  width="28px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                </svg>
              </div>
              <div className={styles.footer__copyright}>
                ©2022. All Rights Reserved.
              </div>
            </Col>
            <Col lg={8}>
              <h1 className={styles.footer__title__newsletter}>
                Subscribe to our newsletter
              </h1>
              <p className={styles.footer__subtitle__newsletter}>
                Want to get all the cool updates about the ecosystem along with
                information regarding
                <br /> available domain names? Subscribe to our newsletter, and
                always stay informed about the
                <br /> developments!
              </p>

              <div>
                <form>
                  <Input
                    id="email"
                    name="subscribeEmail"
                    placeholder="Email Address"
                    type="email"
                  />
                  <Button outline className={`${styles.subscribe_button}`} type="submit">
                    Subscribe
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
