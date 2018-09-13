import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import UkCard from './UkCard';
import companies from './companies';

export default class UkList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rows: companies,
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <Row className='uk__list'>
        {companies.map((r, i) =>
          <UkCard key={i} shortName={r.shortName} logoURL={r.logoURL} pageName={r.pageName} funds={r.funds} navAll={r.navAll} />
        )}
      </Row>

    )
  }
}