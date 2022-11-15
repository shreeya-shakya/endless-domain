import { Col, Row } from "reactstrap";
import styles from "styles/Offer-Banner-Section.module.scss";

const OfferBannerSection = () => {
  return (
    <>
      <section className={styles.section_bg}>
        <div className="container py-5">
          <h1 className={styles.offer_title}>What we Offer</h1>
          <p className={styles.offer__subtitle}>
            Our vision behind the expansion of Endless Domains into blockchain
            domains is to give a place to every <br />
            idea that deserves a place in this cutting-edge environment. Here
            are a few things that we do differently:
          </p>
          <div className={styles.offer_list}>
            <Row>
              <Col lg={4} className={styles.offer_middle_list_padding}>
                <div className={styles.offer__grid__box}>
                  <h6 className={styles.offer__grid__title}>
                    NFT Focused Approach
                  </h6>
                  <p className={styles.offer__grid__content}>
                    We address the NFT market as a niche to provide ample
                    options for creators. Whatever your idea maybe, it will not
                    stop because of a domain name!
                  </p>
                </div>
              </Col>
              <Col lg={4} className={styles.offer_middle_list_padding}>
                <div className={styles.offer__grid__box}>
                  <h6 className={styles.offer__grid__title}>
                    Voluminous Inventory
                  </h6>
                  <p className={styles.offer__grid__content}>
                    We own more than 10,000 domain names that can be availed to
                    facilitate your ideas without altering its essence. If you
                    have an idea, we have a domain name for that!
                  </p>
                </div>
              </Col>
              <Col lg={4} className={styles.offer_middle_list_padding}> 
                <div className={styles.offer__grid__box}>
                  <h6 className={styles.offer__grid__title}>
                    Multiple Browser Integration
                  </h6>
                  <p className={styles.offer__grid__content}>
                    We support all major browsers including Brave, Opera,
                    Chrome, Firefox, and Edge to help you experience a
                    comprehensive journey.
                  </p>
                </div>
              </Col>
              <Col lg={4} className={styles.offer_middle_list_padding}>
                <div className={styles.offer__grid__box}>
                  <h6 className={styles.offer__grid__title}>Global Exposure</h6>
                  <p className={styles.offer__grid__content}>
                    Our team comprises officials from all over the world to
                    bring a variety of opinions, suggestions, and improvements.
                  </p>
                </div>
              </Col>
              <Col lg={4} className={styles.offer_middle_list_padding}>
                <div className={styles.offer__grid__box}>
                  <h6 className={styles.offer__grid__title}>
                    Extensive Wallet Integration
                  </h6>
                  <p className={styles.offer__grid__content}>
                    We support all pivotal wallets like Metamask, all wallets
                    from wallet connect, coinbase wallet, trust wallet, phantom
                    wallet, and glow wallet!
                  </p>
                </div>
              </Col>
              <Col lg={4} className={styles.offer_middle_list_padding}>
                <div className={styles.offer__grid__box}>
                  <h6 className={styles.offer__grid__title}>
                    Seamless Navigation
                  </h6>
                  <p className={styles.offer__grid__content}>
                    To remove all chaos from our user&apos;s journey, we have
                    incorporated a simplified process to grab a domain name
                    within minutes.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferBannerSection;
