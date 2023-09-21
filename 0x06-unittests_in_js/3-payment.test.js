const sinon = require('sinon');
const Utils = require('./utils');
const {expect} = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi using calculateNum function of Utils', () => {
        const onichan = sinon.spy(Utils);

        sendPaymentRequestToApi(100, 20);
        expect(onichan.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(onichan.calculateNumber.callCount).to.be.equal(1);
        onichan.calculateNumber.restore();
    });
});