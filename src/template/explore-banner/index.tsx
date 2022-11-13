import { Button, Col, Row } from "reactstrap";
import styles from "styles/Explore.module.scss";
import titleStyles from "styles/Title.module.scss";

const ExploreBanner = () => {
  return (
    <>
      <section className={`box_shadow_black`}>
        <div className={`container py-4`}>
          <Row>
            <Col lg={8}>
              <div>
                <h2 className={`${titleStyles.title} pb-2 mb-0`}>
                  Easy & Inexpensive Domain Names
                </h2>
                <p className={`mb-0 ${styles.subtitle}`}>
                  We have a domain for all your web3.0 needs.
                </p>
              </div>
            </Col>
            <Col lg={4} className="align-items-center d-flex justify-content-end">
              <Button
                color="primary"
                className={`${styles.explore_button}`}
                href="/search"
                tag="a"
              >
                Let's Explore
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ExploreBanner;
