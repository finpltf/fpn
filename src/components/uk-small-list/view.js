import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../../classes/api';
import LoaderContent from "../loader-content";

class UkSmallList extends Component {


  render() {
    return <div className="main-screen-toggle">
      <div className="list-uk-wrapper">


        <div className="list-uk-title">select</div>
        <ul className={["list-uk", this.props.loadingUkList ? 'loader dark' : ''].join(' ')}>
          {
            this.props.loadingUkList ?
              <LoaderContent /> :
              this.props.ukList.map((item, index) =>
                <li key={'lu-' + index} className="list-uk__item">
                  <Link to={'/uk/' + item.pageName}>{item.shortName}</Link>
                </li>
              )
          }

        </ul>
      </div>
    </div>;
  }
}

UkSmallList.propTypes = {

};

export default UkSmallList;
