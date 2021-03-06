import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import ProjectMember from '../../../../components/ProjectMember';

const Ava1 = process.env.PUBLIC_URL + '/img/11.png';
const Ava2 = process.env.PUBLIC_URL + '/img/12.png';
const Ava3 = process.env.PUBLIC_URL + '/img/14.png';
const Ava4 = process.env.PUBLIC_URL + '/img/15.png';
const Ava5 = process.env.PUBLIC_URL + '/img/photo_notification.png';

export default class Summary extends PureComponent {
  render() {
    return (
      <Col md={12} lg={5} xl={3}>
        <Card className='card--not-full-height'>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Управляющий фондом</h5>
            </div>
            <ProjectMember img={Ava1} name='Peter Jackson' link='/chat' post='IOS Developer'/>
            <ProjectMember img={Ava2} name='Lora Melbourn' link='/chat' post='Android Developer'/>
            <ProjectMember img={Ava3} name='Cat Mew' link='/chat' post='Project Manager'/>
            <ProjectMember img={Ava4} name='Liza Orly' link='/chat' post='Developer'/>
            <ProjectMember img={Ava5} name='Michael Bro' link='/chat' post='Designer'/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}