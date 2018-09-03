import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col, Progress} from 'reactstrap';
import Statistics from './Statistics';



export default class FundPage extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className='fund-summary'>
              <p>
                Активы фонда инвестируются в акции компаний акции российских компаний с высоким потенциалом роста - второй и третий эшелон Московской биржи. Стратегия реализует нетривиальные и смелые идеи, способные принести существенный доход при определенных обстоятельствах. Выбор акций основан на фундаментальном анализе. Рекомендуемый период инвестирования - от трёх лет.
              </p>
              <p>
                Принимая во внимание ограниченную ликвидность и вероятность временного снижения стоимости вложенных средств, инвесторы выигрывают за счет более высокой потенциальной доходности акций компаний малой капитализации, существенно недооцененных рынком или имеющих наибольший потенциал роста бизнеса.
  
              </p>
              <hr />
              <Row>

                <Col md={6} lg={6} xl={4}>
                  <div className='subhead'>Доходность за сутки</div>
                  <h3 className=' plus'>+1.05%</h3>
                </Col>

                <Col md={6} lg={6} xl={4}>
                  <div className='subhead'>Стоимость пая</div>
                  <h3 className=''>4 941₽</h3>
                </Col>

                <Col md={6} lg={6} xl={4}>
                  <div className='subhead'>Стоимость чистых активов</div>
                  <h3 className=''>89 068 284.71 ₽</h3>
                </Col>
           



              </Row>
              <hr />

              <Row>
                <Col md={12} lg={12} xl={12}>
                  <h4 className='page-subtitle'>ДИНАМИКА ИЗМЕНЕНИЯ СТОИМОСТИ ПАЯ И СЧА</h4>
                  <table className="table">
   <tbody>
      <tr>
         <td></td>
         <th>29.08.2018</th>
         <th>30.08.2018</th>
         <th>Изменения</th>
      </tr>
      <tr>
         <th>Пай</th>
         <td class="nav-val"><span>5 021.53</span><span> ₽</span></td>
         <td class="nav-val"><span>4 941</span><span> ₽</span></td>
         <td class="red"><span>-1.60</span><span>%</span></td>
      </tr>
      <tr>
         <th>СЧА</th>
         <td class="nav-val"><span>90 419 874.01</span><span> ₽</span></td>
         <td class="nav-val"><span>89 068 284.71</span><span> ₽</span></td>
         <td class="red"><span>-1.49</span><span>%</span></td>
      </tr>
   </tbody>
</table>
                  
                </Col>
              </Row>

 

              <hr />

              <Statistics />

              <div className='fund-summary__stats'>
                <div className='fund-summary__stat'>
                  <p>123 <span>Tasks</span></p>
                </div>
                <div className='fund-summary__stat'>
                  <p>12 <span>Users</span></p>
                </div>
                <div className='fund-summary__stat'>
                  <p>71 <span>Bugs</span></p>
                </div>
                <div className='fund-summary__progress progress-wrap progress-wrap--middle'>
                  <Progress value={74}>74% completed</Progress>
                </div>
              </div>

            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}