const sinon = require('sinon');
const Utils = require('./utils');
const assert= require('assert');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi using calculateNum function of Utils', () => {
        const onichan = sinon.spy(console, "log");
        const dummy = sinon.stub(Utils, "calculateNumber").returns(10);

        sendPaymentRequestToApi(100, 20);
        assert(onichan.withArgs("The total is: 10").calledOnce);
        assert(dummy.withArgs("SUM", 100, 20).calledOnce);
    });
});