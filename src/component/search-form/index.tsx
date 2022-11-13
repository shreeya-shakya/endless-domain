import { FormEvent } from 'react';
import { Button, Col, Form, Input, Row } from 'reactstrap';
import styles from 'styles/Search.module.scss';
import DomainLink from '../../template/domain-link';

const SearchForm = ({ search }: { search: (keyword: string) => void }) => {
  const LIST_DOMAINS = [
    '.crypto',
    '.nft',
    '.x',
    '.wallet',
    '.bitcoin',
    '.coin',
    '.blockchain',
    '.com',
  ];

  const searchDomain = ($event: FormEvent) => {
    $event.preventDefault();
    const EVENT_TARGET = $event.target as any;
    search(EVENT_TARGET.searchText.value);
  };

  return (
    <>
      <Form className='pb-4' onSubmit={searchDomain}>
        <Row className='row-cols-lg-auto g-3 align-items-center'>
          <Col sm={9} xs={9} lg={9}>
            <Input
              id='searchText'
              name='searchText'
              placeholder='Search...'
              type='text'
            />
          </Col>
          <Col sm={3} xs={3} lg={3}>
            <Button
              color='primary'
              className={styles.search_button}
              type='submit'
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <div className='d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center'>
        {LIST_DOMAINS.map((domain, index) => {
          return <DomainLink domain={domain} key={index}></DomainLink>;
        })}
      </div>
    </>
  );
};

export default SearchForm;
