import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import EditTable from '../../../../components/table/EditableTable';
import Pagination from '../../../../components/Pagination';

export default class DataTable extends PureComponent {

  constructor(props) {
    super(props);
    this.heads = [
      {
        key: 'type',
        name: 'Тип',
        sortable: true,
        width: 40
      },
      {
        key: 'doc',
        name: 'Документ',
        sortable: true,
        width: 370
      },
      {
        key: 'company',
        name: 'Управляющая компания',
        sortable: true,
        width: 350

      },
      {
        key: 'fund',
        name: 'Фонд',
        sortable: true,
        width: 300

      },
      {
        key: 'date',
        name: 'Date',
        sortable: true
      },
      {
        key: 'status',
        name: 'Статус',
        sortable: true
      }
    ];

    this.state = {
      rows: this.createRows(152),
      pageOfItems: []
    };
    this.createRows = this.createRows.bind(this);
    this.getRandomDate = this.getRandomDate.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows + 1; i++) {
      rows.push({
        id: i,
        type: ['Исх.', 'Вх.'][Math.floor((Math.random() * 2))],
        doc: ['Заявление об открытии лицевого счета', 'Ответ по заявлению на открытие счета', 'Заявка на приобретение инвестиционных паев', 'Ответ по анкете зарегистрированного лица'][Math.floor((Math.random() * 3))],
        fund: ['ОПИФ РФИ «Арсагера - КР 1.55»', 'ОПИФ РФИ «Арсагера - СИ»', 'ИПИФА «Арсагера-акции 6.4»', 'ОПИФ РФИ «Арсагера - ФА»'][Math.floor((Math.random() * 4))],
        company: ['ПАО «УК "Арсагера»', 'ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»', 'АО УК «ТФГ', 'АО «Солид менеджмент»'][Math.floor((Math.random() * 4))],
        investsum: Math.min(100, Math.round(Math.random() * 30) + 20),
        date: this.getRandomDate(new Date(2018, 8, 1), new Date(2018, 8, 31)),
        status: ['draft', 'send', 'in_progress', 'rejected', 'done'][Math.floor((Math.random() * 5))],
        work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))]
      });
    }
    return rows;
  };

  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>

            <EditTable heads={this.heads} rows={this.state.rows} />
            <Pagination items={this.state.rows} onChangePage={this.onChangePage} />



            <p>Show
              <select className='select-options'>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
              </select>
              entries
            </p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}