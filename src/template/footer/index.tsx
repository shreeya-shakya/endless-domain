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
              <Link href="/" className="footer__logo">
                <Image
                  src="/logo-invert.png"
                  alt="Footer Logo"
                  width={235}
                  height={75}
                />
              </Link>
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
                <Input
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
                <Button outline className={`${styles.subscribe_button}`}>Subscribe</Button>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
