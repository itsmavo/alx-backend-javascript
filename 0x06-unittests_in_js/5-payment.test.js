const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe("sendPaymentRequestToApi", function() {
    beforeEach("Set up spy to use on each test", function() {
        sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", function() {
        console.log.restore();
    });
    it("check that console.log is called with right arg", function() {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("check that console.log is called with right arg", function() {
        sendPaymentRequestToApi(10, 10);
        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    })
})