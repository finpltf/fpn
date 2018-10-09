import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';


import API from '../../classes/api';

class FundCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {},
    };
  }

  componentDidMount() {
    this.getFund();
  }

  getFund() {
    let get_cs = helper.findObjectInArray(this.props.pifList, 'id', parseInt(this.props.id));
    if (!!get_cs) {
      this.setState({
        loading: true,
        data: get_cs,
      });
    } else {
      API.getFund(this.props.id).then(data => {
        this.setState({
          loading: true,
          data: data,
        });
        this.props.loadPif(data);
      });
    }
  }

  render() {
    return <div>
      {this.state.loading &&
        <div className="card">
          <div className="short-desct-pif">
            <div className="card__title_cont">

              <Link to={'/uk/' + this.props.company + '/fund/' + this.props.id} className="card__title" onClick={() => scroll(scroll(10, 410))}>{(this.state.data.shortName).replace("рыночных финансовых инструментов", "РФИ").replace("рыночных финансовых  инструментов", "РФИ")}</Link>
            </div>
            <div className="text-center hidden">
              <Link to={'/uk/' + this.props.company + '/fund/' + this.props.id} className="card__title" onClick={() => scroll(scroll(10, 430))}> <img src={`/img/logos/${this.props.company}.png`} alt="" /></Link>
            </div>

            <ul>
              <li>{langs.companyFunds.minInvest}: {String(this.state.data.minInvestSum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽</li>
              {this.state.data.navAll &&
                <li>{langs.companyFunds.costOfNAV}: {(parseInt(this.state.data.navAll) / 1000000).toFixed(2)} млн руб.</li>
              }
              {this.state.data.dailyIncomeOne != 0 &&
                <li>{langs.dailyIncomeOne}: <span
                  className={[this.state.data.dailyIncomeOne > 0 ? 'green' : 'red'].join(' ')}>{this.state.data.dailyIncomeOne}%</span>
                </li>
              }


            </ul>
          </div>
          <div className="row">
            {
              this.state.data.buyOnlineURL == 'none' ?
                <a href={this.state.data.buyOnlineURL} className="card__button disabled">{langs.buttons.soon}</a> :
                <a href={this.state.data.buyOnlineURL} className="card__button popup-link btn_buy">{langs.buttons.buy}</a>
            }
          </div>

          <div className="row">
            <Link to={'/uk/' + this.props.company + '/fund/' + this.props.id} onClick={() => scroll(scroll(10, 430))} className="card__button_secondary">{langs.buttons.more}</Link>
          </div>
        </div>
      }


    </div>



      ;

  }
}

FundCard.propTypes = {

};

export default FundCard;
