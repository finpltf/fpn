import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import { translate } from 'react-i18next';







class NavAllUk extends PureComponent {
    render() {
        const { t } = this.props;

        return (

            <Card>
                <CardBody>
                    <div className='card__title'>
                        <h3>Стоимость чистых активов</h3>
                        <h2>1.25 млрд ₽</h2>
                    </div>
                </CardBody>
            </Card>

        )
    }
}

export default translate('common')(NavAllUk);
