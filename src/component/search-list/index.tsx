import styles from "styles/Search.module.scss";
import { DomainListItem } from "../../core/enum/domain-list.type";
import SearchListItem from "../search-list-item";

const SearchList = ({
  title,
  list,
}: {
  title: string;
  list: Array<DomainListItem>;
}) => {
  return (
    <>
      <div className={`mb-4`}>
        <div className={`${styles.domain_list_title}`}>
          <p className="m-0">{title}</p>
        </div>
        {list.map((domain, index) => {
          return (
            <>
              <SearchListItem {...domain} key={index}></SearchListItem>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchList;
