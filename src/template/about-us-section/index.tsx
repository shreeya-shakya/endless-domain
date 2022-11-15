import Image from "next/image";
import { Col, Row } from "reactstrap";
import styles from "styles/About-Us-Section.module.scss";
import titleStyles from "styles/Title.module.scss";

const AboutUsSection = () => {
  return (
    <>
      <section className={``}>
        <div className={`container py-5`}>
          <Row>
            <Col lg={6}>
              <h1 className={`${titleStyles.title} pb-2`}>About Us</h1>
              <p className={styles.about__subtitle}>
                With a team of 15+ professionals and more than 10,000 domains
                in-store, Endless Domains is all set to power the blockchain
                world with relevant and insightful domain names. We believe that
                generic domain names can sometimes fade the web3 element;
                therefore, we have directly integrated blockchain algorithms at
                the heart of our services. Browse through our endless domain
                extensions and put your best foot forward to enter the future!
              </p>
            </Col>
            <Col lg={6} className="position-relative">
              <Image
                src="/about-us.png"
                alt="Benefits"
                className={styles.header__img}
                layout="fill"
                objectFit="contain"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="position-relative">
              <Image
                src="/road-map.png"
                alt="Roadmap"
                layout="fill"
                objectFit="contain"
                className={styles.roadmap_img}
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
