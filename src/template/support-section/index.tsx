import titleStyles from "styles/Title.module.scss";

const SupportSection = () => {
  return (
    <>
      <section className="box_shadow_black">
        <div className={`container py-4`}>
          <h1 className={`text-center ${titleStyles.title}`}>
            Support Service
          </h1>
        </div>
      </section>
    </>
  );
};

export default SupportSection;
