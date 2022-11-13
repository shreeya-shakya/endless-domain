import SearchForm from "../../src/component/search-form";
import SearchList from "../../src/component/search-list";
import { DOMAIN_STATUS } from "../../src/core/enum/domain-status.enum";
import { MetaData } from "../../src/core/enum/meta-data.type";
import H2title from "../../src/template/h2-title";
import Layout from "../../src/template/layout";
import * as apiService from "../../src/core/services/api.service";
import { useState } from "react";
import SearchListItem from "../../src/component/search-list-item";
import { DomainAvailability } from "../../src/core/enum/domain-availability.type";
import { DomainListItem } from "../../src/core/enum/domain-list.type";

const Search = () => {
  const META: MetaData = {
    title: "Explore",
    description: "Explore page",
  };

  const CHECK_AVAILABILITY_URL = "/domains";
  const SUGGESTION_URL = "/suggestions";
  const [domainAvailability, setDomainAvailability] =
    useState<DomainListItem | null>(null);

  const [suggestionList, setSuggestionList] = useState<
    Array<DomainListItem> | []
  >([]);

  const searchDomain = (keyword: string) => {
    setDomainAvailability(null);
    setSuggestionList([]);
    if (keyword.indexOf(".") >= 0) {
      checkDomainAvailability(keyword);
    }
    getDomainSuggestion(keyword);
  };

  const checkDomainAvailability = async (keyword: string) => {
    try {
      const response: DomainAvailability = await apiService.getApi(
        `${CHECK_AVAILABILITY_URL}/${keyword}`
      );
      const domainList: DomainListItem = {
        name: response.domain.name,
        price: response.availability.price,
        status: DOMAIN_STATUS.available,
      };
      setDomainAvailability(domainList);
    } catch (error: any) {
      if (error.code && error.code === "DOMAIN_NAME_INVALID") {
        const domainList: DomainListItem = {
          name: error.value,
          price: null,
          status: DOMAIN_STATUS.unavailable,
        };
        setDomainAvailability(domainList);
      }
    }
  };

  const getDomainSuggestion = async (keyword: string) => {
    try {
      let response: Array<DomainListItem> = await apiService.getApi(
        `${CHECK_AVAILABILITY_URL}${SUGGESTION_URL}?search=${keyword.indexOf(".") >= 0 ? `${keyword.split('.')[0]}`: keyword}${keyword.indexOf(".") >= 0 ? `&tlds=${keyword.split('.')[1]}` : ''}`
      );
      response = response.map((domain) => ({
        ...domain,
        status: DOMAIN_STATUS.available,
      }));
      setSuggestionList(response);
    } catch (error: any) {}
  };

  return (
    <>
      <Layout metaInfo={META}>
        <div className="container">
          <div className="py-5">
            <div className="py-5">
              <H2title title="Domains Names Here .. !"></H2title>
              <SearchForm search={searchDomain}></SearchForm>
            </div>
            {domainAvailability && (
              <SearchList
              title={`Search Result`}
              list={[domainAvailability]}
            ></SearchList>
            )}
            {suggestionList.length > 0 && (
              <SearchList
                title={`${domainAvailability ? 'Suggested Name': 'Search Result'}`}
                list={suggestionList}
              ></SearchList>
            )}

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
