import SearchForm from "../../src/component/search-form";
import SearchList from "../../src/component/search-list";
import { DOMAIN_STATUS } from "../../src/core/enum/domain-status.enum";
import { MetaData } from "../../src/core/enum/meta-data.type";
import H2title from "../../src/template/h2-title";
import Layout from "../../src/template/layout";

const Search = () => {
  const META: MetaData = {
    title: "Explore",
    description: "Explore page",
  };

  return (
    <>
      <Layout metaInfo={META}>
        <div className="container">
          <div className="py-5">
            <div className="py-5">
              <H2title title="Domains Names Here .. !"></H2title>
              <SearchForm></SearchForm>
            </div>
            <SearchList
              title="Search Result"
              list={[
                {
                  name: "domain.crypto",
                  price: 10000,
                  status: DOMAIN_STATUS.available,
                },
                {
                  name: "domain.coin",
                  price: 5000,
                  status: DOMAIN_STATUS.available,
                },
              ]}
            ></SearchList>

            <SearchList
              title="Suggested Name"
              list={[
                {
                  name: "regions.crypto",
                  price: 10000,
                  status: DOMAIN_STATUS.available,
                },
                {
                  name: "area.coin",
                  price: 5000,
                  status: DOMAIN_STATUS.available,
                },
                {
                  name: "field.coin",
                  price: 5000,
                  status: DOMAIN_STATUS.available,
                },
                {
                  name: "test.coin",
                  price: 5000,
                  status: DOMAIN_STATUS.available,
                },
              ]}
            ></SearchList>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
