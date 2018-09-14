import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, UncontrolledTooltip } from 'reactstrap';
import { translate } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';

export default class UkCard extends PureComponent {
    static propTypes = {
        shortName: PropTypes.string,
        pageName: PropTypes.string,
        logoURL: PropTypes.string,
        funds: PropTypes.number,
        navAll: PropTypes.string
    };


    render() {
        return (
            <Col className='company__card' xl={3} lg={3} md={6} sm={12}>
                <Card className='no_padding'>
                    <CardBody>
                        <NavLink to={'/uk/uk_page'} onClick={this.props.onClick}>
                            <div className='card__title hide'>
                                <h3>{this.props.shortName}</h3>
                            </div>
                            <div className='logo__wrap'>
                                <img className='uk__logo' src={'https://my.platform.finance/' + this.props.logoURL} alt={this.props.shortName} />
                            </div>

                            <div className="row params  hide text-left ">

                                <Col xs={6} sm={6} md={6} xl={12} >
                                    <h4 className='subhead'>Стоимость чистых активов: <span className='big'>{this.props.navAll}</span></h4>
                                </Col>

                                <Col xs={6} sm={6} md={4} xl={4} className='text-center risk-column hide'>
                                    <h4 className='subhead'>Риск</h4>
                                    <h3 className='semibold-text yellow'><ShieldIcon /><ShieldHalfFullIcon /><ShieldOutlineIcon /></h3>
                                </Col>

                                <Col xs={6} sm={6} md={6} xl={12} className='' >
                                    <h4 className='subhead'>Фондов под управлением: <span className='big'>{this.props.funds}</span></h4>
                                </Col>

                            </div>


                        </NavLink>
                    </CardBody>
                </Card>
            </Col>



        );
    }
}