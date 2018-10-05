import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, UncontrolledTooltip } from 'reactstrap';
import { translate } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarBorderIcon from 'mdi-react/StarBorderIcon';

const graphUp = process.env.PUBLIC_URL + '/img/graph_up.svg';
const graphDown = process.env.PUBLIC_URL + '/img/graph_down.svg';





export default class FundCard extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        companyShortName: PropTypes.string,
        regNum: PropTypes.string,
        minInvestSum: PropTypes.number,
        incomeOne: PropTypes.number,
        navi: PropTypes.array,
        link: PropTypes.string,
        preview: PropTypes.string,
        logoURL: PropTypes.string
    };




    render() {
        let { graph } = this.props;

        if (this.props.incomeOne < 0) {
            graph = graphDown;
        }
        else {
            graph = graphUp;
        }
        return (
            <Col className='fund__card'>
                <Card className='no_padding'>
                    <CardBody>
                        <NavLink to={'/funds/fund_page'} onClick={this.props.onClick}>
                            <div className='card__title'>
                                <h3>{this.props.title.replace("рыночных финансовых инструментов", "").replace("рыночных финансовых  инструментов", "").replace('\"', '«').slice(0, -1) + '»'}</h3>
                                <h4 className='subhead'> {this.props.companyShortName.replace("ООО", "").replace('\"', '').slice(0, -1).replace('\"', '').replace("АО", "")}

                                </h4>
                            </div>
                            <div className='rating hide'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarBorderIcon />
                            </div>

                            <img className='graph' src={graph} />
                            <div className="row params  text-left">

                                <Col xs={6} sm={6} md={6} xl={6} >
                                    <h4 className='subhead'>Годовая доходность</h4>
                                    <h3 className={[this.props.incomeOne > 0 ? 'green' : 'red'].join(' ')} >{this.props.incomeOne}%</h3>
                                </Col>

                                <Col xs={6} sm={6} md={4} xl={4} className='text-center risk-column hide'>
                                    <h4 className='subhead'>Риск</h4>
                                    <h3 className='semibold-text yellow'><ShieldIcon /><ShieldHalfFullIcon /><ShieldOutlineIcon /></h3>
                                </Col>

                                <Col xs={6} sm={6} md={6} xl={6} className='text-right' >
                                    <h4 className='subhead'>Мин. инвестиция</h4>
                                    <h3 className='semibold-text'>{String(this.props.minInvestSum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}₽</h3>
                                </Col>

                            </div>


                        </NavLink>
                    </CardBody>
                </Card>
            </Col >



        );
    }
}