import Image from "next/image";
import { Col, Row } from "reactstrap";
import styles from "styles/Description.module.scss";
import titleStyles from "styles/Title.module.scss";

const Description = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <Row>
            <Col lg={8}>
              <h1 className={styles.description_title}>
                Adaptability With All <br />
                <span
                  className={`${titleStyles.title}`}
                  style={{ fontWeight: "500" }}
                >
                  Major Blockchains
                </span>
              </h1>
              <p className={styles.description__subtitle}>
                Endless Domains provides you with blockchain friendly domain
                names that <br /> can be integrated with all major L1 and L2
                blockchains. Be it the <br /> foundational Binance Smart Chain,
                the cutting edge Ethereum blockchain, <br /> or the dynamic
                Polygon blockchain, we provide seamless integration with <br />{" "}
                all the industry leaders.
              </p>
            </Col>
            <Col lg={4} className={styles.description_img_section}>
              <div className={styles.description_img_container}>
                <Image
                  src="/icons/polygon.png"
                  alt="Polygon"
                  layout="fill"
                  objectFit="contain"
                  className={styles.description_img}
                />
              </div>
              <div className={styles.description_img_container}>
                <Image
                  src="/icons/binance.png"
                  alt="Binance"
                  layout="fill"
                  objectFit="contain"
                  className={styles.description_img}
                />
              </div>
              <div className={styles.description_img_container}>
                <Image
                  src="/icons/etheturm.png"
                  alt="Ethereum"
                  layout="fill"
                  objectFit="contain"
                  className={styles.description_img}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Description;
