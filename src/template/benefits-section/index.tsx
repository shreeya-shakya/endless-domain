import titleStyles from "styles/Title.module.scss";
import styles from "styles/Benefits-Section.module.scss";
import { Col, Row } from "reactstrap";
import Image from "next/image";

const BenefitsSection = () => {
  return (
    <>
      <section className={`box_shadow_black`}>
        <div className={`container py-5`}>
          <h1 className={styles.benefit_title}>
            Benefits Of Having A{" "}
            <span
              className={`${titleStyles.title}`}
              style={{ fontWeight: "500" }}
            >
              Blockchain Domain
            </span>
          </h1>
          <p className={styles.benefit__subtitle}>
            There are quite a few benefits of having a blockchain domain
            entitled to your name.
          </p>
          <Row>
            <Col lg={6} className="position-relative">
              <Image
                src="/benefit.png"
                alt="Benefits"
                className={styles.header__img}
                layout="fill"
                objectFit="contain"
              />
            </Col>
            <Col lg={6}>
              <div className={styles.benefit_box}>
                <div
                  className={`${styles.benefit__header_info} position-relative`}
                >
                  <h3 className={styles.header__title}>Digital Identity</h3>
                  <Image
                    src="/icons/digital.png"
                    alt="Benefits"
                    className={styles.header__img}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className={styles.benefit__sub_header_info}>
                  <p>
                    You can choose to buy a domain with your own name for the
                    purpose of creating a digital identity. With the
                    advancements in metaverse, having a digital presence will
                    provide you with a leading edge.
                  </p>
                </div>
              </div>

              <div className={styles.benefit_box}>
                <div
                  className={`${styles.benefit__header_info} position-relative`}
                >
                  <h3 className={styles.header__title}>
                    Sell A Product/Service
                  </h3>
                  <Image
                    src="/icons/digital.png"
                    alt="Benefits"
                    className={styles.header__img}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className={styles.benefit__sub_header_info}>
                  <p>
                    Are you a freelancer, working professional, or an
                    entrepreneur who wants to kick start their business
                    digitally? The first step is to seal a domain name!
                  </p>
                </div>
              </div>

              <div className={styles.benefit_box}>
                <div
                  className={`${styles.benefit__header_info} position-relative `}
                >
                  <h3 className={styles.header__title}>
                    Gateway Into The Ecosystem
                  </h3>
                  <Image
                    src="/icons/digital.png"
                    alt="Benefits"
                    className={styles.header__img}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className={styles.benefit__sub_header_info}>
                  <p>
                    The world of blockchain is prancing towards a tech-savvy
                    future where digital footprints will hold ample value.
                    Having a website will allow you to navigate freely, and form
                    connections.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
