import Image from "next/image";
import styles from "styles/Hero-Section.module.scss";

const HeroSection = () => {
  return (
    <>
      <section className={`${styles.hero_background}`}>
        <div className={`container`}>
          <div className={styles.banner_col_1}>
            <h1 className={styles.banner__title}>
              Enter the World of <br /> Blockchains.
            </h1>
            <p className={styles.banner__subtitle}>
              Creating global decentralized digital identities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
