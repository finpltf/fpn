import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {deleteCryptoTableData} from '../../../../redux/actions/cryptoTableActions';

import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import Panel from '../../../../components/Panel';
import Table from '../../../../components/table/Table';
import {translate} from 'react-i18next';

const data = [
  {name: 'Fri', btc: 56.61, eth: 78.61, xrp: 35.61, bch: 105.61, eos: 45.61, ltc: 78.61, ada: 88.61, xlm: 86.61, iota: 88.61, neo: 86.61},
  {name: 'Sat', btc: 110.6, eth: 45.6, xrp: 57.6, bch: 78.6, eos: 55.6, ltc: 35.6, ada: 78.6, xlm: 32.6, iota: 78.6, neo: 32.6},
  {name: 'Sun', btc: 115, eth: 115, xrp: 115, bch: 115, eos: 115, ltc: 115, ada: 115, xlm: 115, iota: 115, neo: 115}
];

class CustomTooltip extends PureComponent {
  render() {
    const {active} = this.props;

    if (active) {
      const {payload} = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">{`$${payload[0].value}`}</p>
          
        </div>
      );
    }

    return null;
  }
}

class DropDownMore extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    handleDeleteRow: PropTypes.func
  };

  render() {
    return (
      <UncontrolledDropdown className='dashboard__table-more'>
        <DropdownToggle>
          <p><DotsHorizontalIcon/></p>
        </DropdownToggle>
        <DropdownMenu className='dropdown__menu'>
          <Link to={`/dashboard_crypto/edit/${this.props.index}`}><DropdownItem>Edit</DropdownItem></Link>
          <DropdownItem onClick={this.props.handleDeleteRow}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

class TopTen extends PureComponent {

  handleDeleteRow = (index, e) => {
    e.preventDefault();
    let arrayCopy = [...this.props.cryptoTable.items];
    arrayCopy.splice(index, 1);
    this.props.dispatch(deleteCryptoTableData(arrayCopy));
  };

  render() {
    const {t} = this.props;

    return (
      <Panel lg={12} title={t('dashboard_crypto.top_cryptocurrencies')}>
        <Table responsive className='table--bordered dashboard__table-crypto'>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Размер СЧА</th>
            <th>Стоимость пая</th>
            <th>Объём</th>
            <th>Что-то ещё</th>
            <th>Доходность</th>
            <th>График (7 days)</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {this.props.cryptoTable.items.map((crypto, index) =>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{crypto.name}</td>
              <td>{crypto.market_cap}</td>
              <td>{crypto.price}</td>
              <td>{crypto.volume}</td>
              <td>{crypto.supply} {crypto.chart}</td>
              <td>{crypto.change}</td>
              <td className='dashboard__table-crypto-chart'>
                <ResponsiveContainer height={65} width={210} className='dashboard__chart-container'>
                  <AreaChart data={data} margin={{top: 0, left: 0, bottom: 0}}>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Area type='monotone' dataKey={crypto.chart} fill='#FFF' stroke='#ee1a2d'
                          fillOpacity={0.2}/>
                  </AreaChart>
                </ResponsiveContainer>
              </td>
              <td>
                <DropDownMore index={index} handleDeleteRow={(e) => this.handleDeleteRow(index, e)}/>
              </td>
            </tr>
          )}
          </tbody>
        </Table>
      </Panel>
    )
  }
}

export default connect(state => {
  return {cryptoTable: state.cryptoTable};
})(translate('common')(TopTen));
