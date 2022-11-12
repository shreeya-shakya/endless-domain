import { Button, Col, Form, Input, Row } from "reactstrap";
import styles from "styles/Search.module.scss";
import DomainLink from "../../template/domain-link";

const SearchForm = () => {
  const LIST_DOMAINS = [".crypto", ".nft", ".x", ".wallet", ".bitcoin", ".coin", ".blockchain", ".com"];

  return (
    <>
      <Form className="pb-4">
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col sm={9} xs={9} lg={9}>
            <Input
              id="searchText"
              name="searchText"
              placeholder="Search..."
              type="text"
            />
          </Col>
          <Col sm={3} xs={3} lg={3}>
            <Button color="primary" className={styles.search_button}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center">
        {LIST_DOMAINS.map((domain) => {
          return (
            <DomainLink domain={domain}></DomainLink>
          );
        })}
      </div>
    </>
  );
};

export default SearchForm;
