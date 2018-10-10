import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import UkCard from './UkCard';
import companies from './companies';

import API from '../../../classes/api';

import { loadUkLIst, loadingUkLIst } from '../../../redux/actions/api';


export default class UkList extends PureComponent {
  constructor(props) {
    super(props);


    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
    console.log('s2:' + this.state);
  }

  componentWillMount() {
    this.loadingUkList();
  }

  loadingUkList() {

    if (this.props.ukList) {
      if (!this.props.ukList && this.props.ukList.length == 0) {
        this.props.loadingUkLIst(true);
        API.getCompanies().then(data => {
          //  this.props.loadUkLIst(data);
          console.log('loadUkLIst2 ' + JSON.stringify(data));

          this.state.UkList = {
            rows: data,
            pageOfItems: []
          };
          console.log('val data:' + JSON.stringify(this.state.UkList));
        });
        console.log('loadingUkList1 ' + JSON.stringify(this.props));



        for (let value of Object.values(this.state)) {
          console.log('val:' + value);
        }
      }
    }
  }

  render() {
    let comp = this.state;
    console.log('comp', comp);
    return (
      <Row className='uk__list'>
        {companies((r, i) =>
          <UkCard key={i} shortName={r.shortName} logoURL={r.logoURL} pageName={r.pageName} funds={r.funds} navAll={r.navAll} />
        )}
      </Row>

    )
  }
}