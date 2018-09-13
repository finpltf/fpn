import React, { PureComponent } from 'react';
import { Card, CardBody, Row, Col, UncontrolledTooltip } from 'reactstrap';
import Statistics from './Statistics';

import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';
import InformationVariantIcon from 'mdi-react/InformationVariantIcon';
import BuyButton from './BuyButton';

import DateRangePicker from './DateRangePicker';
import SimpleLineChart from './SimpleLineChart';

import showResults from './Show';


export default class FundPage extends PureComponent {
  render() {
    const {
      handleSubmit,
      // reset,
      t
    } = this.props;
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

              <hr className='h15 invis' />


              <h3>Доходность</h3>
              <Row className='margin-30'>
                <Col xl={2} lg={3} md={6}>
                  <div className='subhead' id='scha' >3 мес.</div>
                  <h3 className='red'>-0.79%</h3>
                </Col>
                <Col xl={2} lg={3} md={6}>
                  <div className='subhead' id='rsp' >6 мес.</div>
                  <h3 className='green'>+7.22%</h3>
                </Col>
                <Col xl={2} lg={3} md={6}>
                  <div className='subhead' id='rsp' >12 мес.</div>
                  <h3 className='green'>+31%</h3>
                </Col>
                <Col xl={2} lg={3} md={6}>
                  <div className='subhead' id='rsp' >36 мес.</div>
                  <h3 className='green'>+31.78%</h3>
                </Col>
                <Col xl={4} lg={12} md={12} className='text-center' >
                  <BuyButton />
                </Col>

              </Row>

              <Row>
                <Col xl={12}>
                  <h3>ДИНАМИКА ИЗМЕНЕНИЯ СТОИМОСТИ ПАЯ И СЧА</h3>
                </Col>

              </Row>


              <SimpleLineChart />


              <div className='dynamic'>
                <table className="table">
                  <tbody>
                    <tr>
                      <td></td>
                      <th>29.08.2018</th>
                      <th>30.08.2018</th>
                      <th>Изменения</th>
                    </tr>
                    <tr>
                      <th>Стоимость пая</th>
                      <td class="nav-val"><span>5 021.53</span><span>₽</span></td>
                      <td class="nav-val"><span>4 941</span><span>₽</span></td>
                      <td class="green"><span>+1.05</span><span>%</span></td>
                    </tr>
                    <tr>
                      <th>Стоимость чистых активов</th>
                      <td class="nav-val"><span>90 419 874.01</span><span>₽</span></td>
                      <td class="nav-val"><span>89 068 284.71</span><span>₽</span></td>
                      <td class="red"><span>-1.49</span><span>%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>



              <hr className='h30' />
              <div className="features row margin-30">
                <h3>Преимущества</h3>
                <ul className="list-deco">
                  <li className="list-deco__item col-md-6">Консервативно управляемый фонд</li>
                  <li className="list-deco__item col-md-6">Основа стратегии управления – фундаментальный анализ</li>
                  <li className="list-deco__item col-md-6">Один из наиболее агрессивных фондов в линейке «УК»</li>
                  <li className="list-deco__item col-md-6">Авторитетный на рынке Управляющий – Элвис Марламов</li>
                </ul>
              </div>

              <Row className='margin-30'>
                <div className='body-btn'>
                  <BuyButton />
                </div>

              </Row>

              <Row className='margin-30'>

                <h3>КОМИССИИ</h3>
                <ul className='list-deco'>
                  <li className='list-deco__item col-md-6'>
                    <div>Вознаграждение управляющей компании – 1.0%</div>
                  </li>
                  <li className='list-deco__item col-md-6'>
                    <div>Вознаграждение спец. депозитария, регистратора и аудитора - не более 0.4%</div>
                  </li>
                  <li className='list-deco__item col-md-6'>
                    <div>Прочие расходы, возмещаемые за счет имущества, составляющего фонд - не более 0.5%</div>
                  </li>
                  <li className='list-deco__item col-md-6'>
                    <div>Максимальный общий размер вознаграждений и расходов (за исключением налогов и иных обязательных платежей) - не более 1.9%</div>
                  </li>
                  <li className='list-deco__item col-md-6'>
                    <div>Надбавка к стоимости пая, взимаемая при приобретении паев (с учетом НДС): при подаче заявки управляющей компании - не взимается, при подаче заявки АО «Специализированный депозитарий «ИНФИНИТУМ» - 0.5%</div>
                  </li>
                  <li className='list-deco__item col-md-6'>
                    <div>Скидка со стоимости пая, взимаемая при погашении паев(с учетом НДС) зависит от срока владения паями: при подаче заявки управляющей компании: менее 365 дней - 0.25%, равный или более 365 дней - не взимается, при подаче заявки АО «Специализированный депозитарий «ИНФИНИТУМ» - 0.5%</div>
                  </li>
                </ul>



              </Row>



              <hr className=' h15 ' />


              <h3>Документы фонда</h3>
              <Row className='margin-30 docs'>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Информация о размерах суммы, на которую выдается один инвестиционный пай" class="svgIcon" /><span>Информация о размерах суммы, на которую выдается один инвестиционный пай</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Информация о размерах суммы денежной компенсации, подлежащей выплате в связи с погашением инвестиционного пая" class="svgIcon" /><span>Информация о размерах суммы денежной компенсации, подлежащей выплате в связи с погашением инвестиционного пая</span></a>

                </Col>

                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Информация о стоимости чистых активов паевого инвестиционного фонда в расчете на один инвестиционный пай на последнюю отчетную дату" class="svgIcon" /><span>Информация о стоимости чистых активов паевого инвестиционного фонда в расчете на один инвестиционный пай на последнюю отчетную дату</span></a>
                </Col>

                <Col md={6}>
                  <a href="https://www.solid-mn.ru/about/contact/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Информация о времени начала и окончания приема Управляющей компанией заявок на приобретение, заявок на погашение и заявок на обмен инвестиционных паев в течение рабочего дня" class="svgIcon" /><span>Информация о времени начала и окончания приема Управляющей компанией заявок на приобретение, заявок на погашение и заявок на обмен инвестиционных паев в течение рабочего дня</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Правила доверительного управления паевым инвестиционным фондом" class="svgIcon" /><span>Правила доверительного управления паевым инвестиционным фондом</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Изменения и дополнения в правила доверительного управления паевым инвестиционным фондом" class="svgIcon" /><span>Изменения и дополнения в правила доверительного управления паевым инвестиционным фондом</span></a>
                </Col>

                <Col md={6}>
                  <a href="http://www.vtbreg.ru/pif/PVR_PIF_2017.pdf" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Правила ведения реестра владельцев инвестиционных паев" class="svgIcon" /><span>Правила ведения реестра владельцев инвестиционных паев</span></a>
                </Col>

                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/accounting/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Справка о стоимости чистых активов паевого инвестиционного фонда и расчетной стоимости одного инвестиционного пая по последней оценке" class="svgIcon" /><span>Справка о стоимости чистых активов паевого инвестиционного фонда и расчетной стоимости одного инвестиционного пая по последней оценке</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/accounting/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Аудиторское заключение о бухгалтерской (финансовой) отчетности управляющей компании паевого инвестиционного фонда" class="svgIcon" /><span>Аудиторское заключение о бухгалтерской (финансовой) отчетности управляющей компании паевого инвестиционного фонда</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/accounting/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Отчет о приросте (об уменьшении) стоимости имущества, составляющего паевой инвестиционный фонд" class="svgIcon" /><span>Отчет о приросте (об уменьшении) стоимости имущества, составляющего паевой инвестиционный фонд</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/accounting/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Сведения о вознаграждении управляющей компании и расходах, оплаченных за счет имущества, составляющего паевой инвестиционный фонд" class="svgIcon" /><span>Сведения о вознаграждении управляющей компании и расходах, оплаченных за счет имущества, составляющего паевой инвестиционный фонд</span></a>
                </Col>
                <Col md={6}>
                  <a href="https://www.solid-mn.ru/services/funds/solid-mmvb/accounting/" target="_blank" class="files2dl__link files2dl__link_wide"><img width="80" src="https://platform.finance/img/icons/pdf.svg" alt="Бухгалтерская (финансовая) отчетность управляющей компании паевого инвестиционного фонда" class="svgIcon" /><span>Бухгалтерская (финансовая) отчетность управляющей компании паевого инвестиционного фонда</span></a>
                </Col>
              </Row>

              <p>
                Активы фонда инвестируются в акции компаний акции российских компаний с высоким потенциалом роста - второй и третий эшелон Московской биржи. Стратегия реализует нетривиальные и смелые идеи, способные принести существенный доход при определенных обстоятельствах. Выбор акций основан на фундаментальном анализе. Рекомендуемый период инвестирования - от трёх лет.
              </p>
              <p>
                Принимая во внимание ограниченную ликвидность и вероятность временного снижения стоимости вложенных средств, инвесторы выигрывают за счет более высокой потенциальной доходности акций компаний малой капитализации, существенно недооцененных рынком или имеющих наибольший потенциал роста бизнеса.

              </p>


            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

