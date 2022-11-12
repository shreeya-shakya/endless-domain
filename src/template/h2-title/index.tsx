import styles from "styles/Title.module.scss";
import { Title } from "../../core/enum/title.type";

const H2title = ({title}: Title) => {
  return (
    <>
      <h2 className={`${styles.title} pb-4 mb-0`}>{title}</h2>
    </>
  );
};

export default H2title;
