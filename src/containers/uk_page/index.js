import React, { PureComponent } from 'react';
import { Col, Container, Row, Badge, UncontrolledTooltip, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import UkInfo from './components/UkInfo';
import UkOffices from './components/UkOffices';
import UkMap from './components/UkMap';
import FundCard from '../funds/components/fundCard';
import UkInfo2 from './components/UkInfo2';
import Manager from './components/Manager';


export default class uk_page extends PureComponent {
    render() {
        return (
            <Container className='uk__page'>

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

                    <UkInfo />



                </Row>



                <Row>
                    <Col md={12}>
                        <h1 className='page-title'>Фонды под управлением</h1>
                    </Col>

                </Row>


                <Row>
                    <FundCard />
                    <FundCard />

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