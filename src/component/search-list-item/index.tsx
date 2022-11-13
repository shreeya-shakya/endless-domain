import { Badge, Button, Col, Row } from "reactstrap";
import styles from "styles/Search.module.scss";
import { DomainListItem } from "../../core/enum/domain-list.type";
import { DOMAIN_STATUS } from "../../core/enum/domain-status.enum";

const SearchListItem = ({ name, price, status }: DomainListItem) => {
  return (
    <>
      <Row className={`py-3 align-items-center`}>
        <Col xs="8">
          <div className={`${styles.domain_name_status}`}>
            <p className="mb-0 me-2">{name}</p>
            <Badge
              className={`${styles.domain_status}`}
              data-status={status}
            >
              {status}
            </Badge>
          </div>
        </Col>
        <Col xs="2">
          {
            price &&<p className={`${styles.domain_price} mb-0`}>${price}</p>
          }
        </Col>
        <Col xs="2">
          <Button outline className={`${styles.domain_purchase_button}`} disabled={status===DOMAIN_STATUS.unavailable}>
            Buy
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SearchListItem;
