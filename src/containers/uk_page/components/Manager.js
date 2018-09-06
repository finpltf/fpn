
import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { translate } from 'react-i18next';

class Manager extends PureComponent {
    render() {
        const { t } = this.props;

        return (
            <Card>
                <CardBody>

                    <Row>
                        <Col lg={4} className='text-center'>
                            <img src='https://is.gd/65fFrR' />
                        </Col>

                        <Col lg={8}>
                            <div className='person'>
                                <h3 className='name bold-text'>Мухамеджанова Сабина </h3>
                                <div className='job'>управляющий активами</div>
                                <div className='about'>Сабина Мухамеджанова присоединилась к команде УК "Промсвязь" в июне 2013 г. Ранее Сабина работала советником по инвестиционным продуктам акций в Сбербанк КИБ (департамент Private banking), а до этого была аналитиком в УК "Ренессанс Капитал", Банке Москвы и УК "Альфа Капитал". Сабина окончила бакалавриат ГУ-ВШЭ и магистратуру Лондонской школы экономики.</div>
                            </div>
                        </Col>
                    </Row>



                </CardBody>
            </Card>
        )
    }
}

export default translate('common')(Manager);


