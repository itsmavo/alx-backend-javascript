const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function(){

    it(`if numbers round`, function(){
        const ans = calculateNumber(3, 4);
        assert.strictEqual(ans, 7);
    });

    it(`if number round decimal`, function(){
        const ans = calculateNumber(3.5, 3.2);
        assert.strictEqual(ans, 7);
    });

    it(`if number round decimal`, function(){
        const ans = calculateNumber(1.5, 2.8);
        assert.strictEqual(ans, 5);
    });    

    it(`if number round zeros`, function(){
        const ans = calculateNumber(0, 0);
        assert.strictEqual(ans, 0);
    });

    it(`if number round decimal`, function(){
        const ans = calculateNumber(-1.4, -1.3);
        assert.strictEqual(ans, -2);
    });

    it(`if number round decimal`, function(){
        const ans = calculateNumber(2.499999, 3.499999);
        assert.strictEqual(ans, 5);
    });
})