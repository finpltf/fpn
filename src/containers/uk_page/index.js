import React, { PureComponent } from 'react';
import { Col, Container, Row, Badge, UncontrolledTooltip, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import UkInfo from './components/UkInfo';
import UkOffices from './components/UkOffices';
import NavAll from './components/NavAll';
import DuLicence from './components/DuLicence';
import UkLicence from './components/UkLicence';

import GetFundsList from '../funds_list/components/FundsList';
import UkInfo2 from './components/UkInfo2';
import Manager from './components/Manager';


export default class uk_page extends PureComponent {
    render() {
        return (
            <Container className='ukPage'>

                <div>
                    <Breadcrumb>

                        <BreadcrumbItem> <NavLink className='fund__card' to={'/funds'} onClick={this.props.onClick}>Фонды</NavLink></BreadcrumbItem>
                        <BreadcrumbItem active>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <Row>
                    <Col md={12}>
                        <h1 className='page-title'>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</h1>
                        <h3 className='page-subhead subhead'>Управляющая компания</h3>
                    </Col>

                </Row>
                <Row>
                    <Col xl={12}>
                        <UkInfo />
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <h2 className='page-title'>Фонды под управлением</h2>
                    </Col>

                </Row>


                <Row>
                    <Col>
                        <GetFundsList />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <h2 className='page-title'>Управляющие фондами</h2>
                    </Col>

                </Row>

                <Row>
                    <Col lg={6}>
                        <Manager />
                    </Col>
                </Row>

                <Row>
                    <hr className='h30' />
                    <hr />

                    <UkInfo2 />
                </Row>
            </Container>
        )
    }
}