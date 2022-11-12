import Link from "next/link";
import styles from "styles/Search.module.scss";

const DomainLink = ({ domain }: { domain: string }) => {
  return (
    <>
      <Link href="" className={styles.domain_link}>
        {domain}
      </Link>
    </>
  );
};

export default DomainLink;
