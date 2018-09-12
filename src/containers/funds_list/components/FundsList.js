import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import Pagination from '../../../components/Pagination';
import SearchResult from '../../../components/SearchResult';
import funds from './funds';

export default class SearchHere extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rows: funds,
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
      <Row className='funds__page'>
        {funds.map((r, i) =>
          <SearchResult key={i} title={r.shortName} link={r.buyOnlineURL} incomeOne={r.incomeOne} regNum={r.regNum} minInvestSum={r.minInvestSum} companyShortName={r.companyShortName} preview={r.companyShortName} />
        )}
      </Row>

    )
  }
}