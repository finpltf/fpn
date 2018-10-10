import CONFIG from '../config';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class API {

    constructor() {

        if (process.env.NODE_ENV === 'production') {
            this.server = window.location.origin;

        } else {
            this.server = 'https://cors-anywhere.herokuapp.com/my.platform.finance';
        }

        this.auth = 'c2l0ZTo0ekJuV0Z4cDJ0RHV3NER4UDRucFEwN3p1ODludXAyag==';
    }

    test() {
        return 1;
    }

    getFunds() {
        return this.callMethod('api/v1/funds?limit=100');
    }

    getFundStructureTypes() {
        return this.callMethod('api/External/list/fundStructureTypes');
    }

    getFundTypes() {
        return this.callMethod('api/External/list/fundTypes');
    }

    getCompanyFunds(company) {
        return this.callMethod('api/External/funds?company=' + company);
    }

    getCompanies() {
        return this.callMethod('api/v1/companies');
    }

    getCompany(id) {
        return this.callMethod('api/External/company/' + id);
    }

    getFund(id) {
        return this.callMethod('api/External/fund/' + id);
    }

    getFundNav(id) {
        return this.callMethod('api/External/fund/' + id + '/nav');
    }

    getFundIncome(id, period) {
        return this.callMethod('api/External/fund/' + id + '/income?period=' + period);
    }

    callMethod(url, data = {}) {
        let self = this;

        return new Promise((resolve, reject) => {
            fetch(self.server + '/' + url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + self.auth,
                }
            }).then(
                response => response.json()
            ).then(data => {
                resolve(data);
            }).catch(function (err) {
                
            });
        });
    }

}

export default new API;
