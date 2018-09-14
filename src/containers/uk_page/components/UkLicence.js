import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import { translate } from 'react-i18next';





class UkLicence extends PureComponent {
    render() {
        const { t } = this.props;

        return (

            <Card>
                <CardBody>
                    <div className='card__title'>
                        <h4>Номер лицензии УК</h4>
                        <h3>21-000-1-00010</h3>

                        <h4>Дата выдачи</h4>
                        <h3>11.02.2005</h3>
                    </div>
                </CardBody>
            </Card>

        )
    }
}

export default translate('common')(UkLicence);
