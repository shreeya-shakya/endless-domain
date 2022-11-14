import { Col, Row } from "reactstrap";
import titleStyles from "styles/Title.module.scss";
import styles from "styles/Support.module.scss";

const SupportSection = () => {
  return (
    <>
      <section className="box_shadow_black">
        <div className={`container py-4`}>
          <h1 className={`text-center ${titleStyles.title} pb-2`}>
            Support Service
          </h1>
          <Row className="align-items-center">
            <Col lg={3}>
              <div className={styles.support__box}>
                <h2 className={styles.support__box_header}>Partner with us</h2>

                <p className={styles.support__box_sub_header}>
                  Become a part of our extensive network of partners and
                  increase your visibility to grow forward in the blockchain
                  Industry.
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.support__box}>
                <h2 className={styles.support__box_header}>
                  Business Proposal
                </h2>

                <p className={styles.support__box_sub_header}>
                  Every big business is powered by an even bigger vision. Join
                  our vision to become a part of this digital revolution.
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.support__box}>
                <h2 className={styles.support__box_header}>
                  {" "}
                  Become a Team member
                </h2>

                <p className={styles.support__box_sub_header}>
                  Join us in advancing towards this next level of Internet
                  revolution with your knowledge, skills, and passion. Redefine
                  your everyday in life Web3.0, starting today!
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.support__box}>
                <h2 className={styles.support__box_header}>API Partnership</h2>

                <p className={styles.support__box_sub_header}>
                  User experience is the most accurate metric to define the
                  success of a marketplace. March forward towards the best user
                  interface with seamless experience using our simple solutions.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SupportSection;
