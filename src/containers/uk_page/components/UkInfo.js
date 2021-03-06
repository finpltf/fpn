import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { translate } from 'react-i18next';


import { NavLink } from 'react-router-dom';

import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';





class UkInfo extends PureComponent {
  render() {
    const { t } = this.props;

    return (
        <Card>
          <CardBody>
  
            <img src='https://my.platform.finance/site/org_169_logo.jpg' />
              <p>
                Услуги по доверительному управлению оказываются Обществом с ограниченной ответственностью "Управляющая компания Инвест Менеджмент Центр". Лицензия на осуществление деятельности по управлению инвестиционными фондами, паевыми инвестиционными фондами и негосударственными пенсионными фондами № 21-000-1-00955 от 14 мая 2013 года выдана ФСФР России, без ограничения срока действия. Правилами доверительного управления паевыми инвестиционными фондами, находящимися под управлением ООО "УК Инвест Менеджмент Центр", предусмотрены скидки к расчетной стоимости паев при их погашении. Обращаем Ваше внимание на то, что взимание скидок уменьшает доходность инвестиций в инвестиционные паи паевых инвестиционных фондов. При определении прироста расчетной стоимости инвестиционного пая не учитываются скидки с расчетной стоимости инвестиционных паев при их погашении. С правилами доверительного управления, можно ознакомиться на странице фонда, расположенной на сайте Финансовой платформы.
                
              </p>
<br/>
<br/>
              <div className='graph'>


              </div>

              <div className="row text-left">

                <Col xs={6} sm={6} md={6} xl={4} className=''>
                  <h4 className='subhead'>Стоимость чистых активов</h4>
                <h3 className=' '>0.12МЛРД ₽</h3>
              <h4 className='subhead'>Фондов под управлением</h4>
              <h3 className=' '>5</h3>
                </Col>

                <Col xs={6} sm={6} md={6} xl={4} className=' ' >
                <h4 className='subhead'>Дата выдачи лицензии УК</h4>
                  <h3 className=' '>14.05.2013</h3>
                  <h4 className='subhead'>Дата выдачи</h4>
                  <h3>11.02.2005</h3>
                </Col>  
              
              <Col xs={6} sm={6} md={6} xl={4} className=' ' >
                <h4 className='subhead'>Номер лицензии ДУ</h4>
                <h3 className=' '>21-000-1-00955</h3>
                <h4 className='subhead'>Дата выдачи</h4>
              <h3>11.02.2005</h3>

              </Col>
              </div>


          
          </CardBody>
        </Card>
    )
  }
}

export default translate('common')(UkInfo);
