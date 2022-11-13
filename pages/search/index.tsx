import SearchForm from "../../src/component/search-form";
import SearchList from "../../src/component/search-list";
import { DOMAIN_STATUS } from "../../src/core/enum/domain-status.enum";
import { MetaData } from "../../src/core/enum/meta-data.type";
import H2title from "../../src/template/h2-title";
import Layout from "../../src/template/layout";
import * as apiService from "../../src/core/services/api.service";
import { useState } from "react";
import { DomainAvailability } from "../../src/core/enum/domain-availability.type";
import { DomainListItem } from "../../src/core/enum/domain-list.type";

const Search = () => {
  const META: MetaData = {
    title: "Explore",
    description: "Explore page",
  };
  const [spinner, setSpinner] = useState(false);
  const CHECK_AVAILABILITY_URL = "/domains";
  const SUGGESTION_URL = "/suggestions";
  const [domainAvailability, setDomainAvailability] =
    useState<DomainListItem | null>(null);

  const [suggestionList, setSuggestionList] = useState<
    Array<DomainListItem> | []
  >([]);

  const searchDomain = (keyword: string) => {
    setSpinner(true);
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
      console.log(domainAvailability)
      let response: Array<DomainListItem> = await apiService.getApi(
        `${CHECK_AVAILABILITY_URL}${SUGGESTION_URL}?search=${
          keyword.indexOf(".") >= 0 ? `${keyword.split(".")[0]}` : keyword
        }${keyword.indexOf(".") >= 0 && domainAvailability?.status === DOMAIN_STATUS.available? `&tlds=${keyword.split(".")[1]}` : ""}&page=1&rowsPerPage=10`
      );
      response = response.map((domain) => ({
        ...domain,
        status: DOMAIN_STATUS.available,
      }));
      setSuggestionList(response);
      setSpinner(false);
    } catch (error: any) {
      setSpinner(false);
    }
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
            {spinner && (
              <div className="text-center">
                <svg
                  className={"spinner mb-2"}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"></path>
                </svg>
              </div>
            )}
            {domainAvailability && (
              <SearchList
                title={`Search Result`}
                list={[domainAvailability]}
              ></SearchList>
            )}
            {suggestionList.length > 0 && (
              <SearchList
                title={`${
                  domainAvailability ? "Suggested Name" : "Search Result"
                }`}
                list={suggestionList}
              ></SearchList>
            )}

            {/* <SearchList
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
            ></SearchList> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
