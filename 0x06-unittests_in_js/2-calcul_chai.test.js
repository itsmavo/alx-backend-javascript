const assert = require('assert')
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
        });
        it('equal positive numbers decimals', () => {
            assert.strictEqual(calculateNumber('SUM', 2.4, 2.3), 4);
        });
        it('equal negatives numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
        });
        it('equal negative numbers decimals', () => {
            assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
        });
        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
        });
        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
        });
    });
    describe('type == "SUBTRACT"', () => {
        it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
        });
        it('equal positive numbers decimals', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.3), 0);
        });
        it('equal negatives numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
        });
        it('equal negative numbers decimals', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
        });
        it('positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4);
        });
        it('0 and 0', () => {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
        });
    });
    describe('type == "DIVIDE"', () => {
        it('positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
          });
      
          it('numbers with different signs', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
          });
      
          it('numbers with different signs (alternate)', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
          });
      
          it('negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
          });
      
          it('equal positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
          });
      
          it('equal negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
          });
    })
})