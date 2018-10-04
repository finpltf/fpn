import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import FundCard from '../../funds_list/components/FundCard';
import funds from '../../funds_list/components/funds';

export default class FundsLine extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            rows: funds,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <Row className='funds__line'>
                {funds.map((r, i) =>
                    <FundCard key={i} title={r.shortName} link={r.buyOnlineURL} incomeOne={r.incomeOne} regNum={r.regNum} minInvestSum={r.minInvestSum} companyShortName={r.companyShortName} logoURL={r.logoURL} />
                )}
            </Row>

        )
    }
}