let isOddOrEven = require('../p01_EvenOrOdd').isOddOrEven;
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('isOddEven tests', function () {
    it('should return undefined for 13', function () {
        expect(isOddOrEven(13)).to.equal(undefined, 'function did not return correct');
    });
    it('should return undefined for {name:pesho}', function () {
        expect(isOddOrEven({name:'pesho'})).to.equal(undefined, 'function did not return correct');
    });
    it('should return even for roar', function () {
        assert.equal(isOddOrEven('roar'), 'even', 'function did not return correct');
    });
    it('should return odd for pesho', function () {
        expect(isOddOrEven('pesho')).to.equal('odd', 'function did not return correct');
    });
    it('with multiple consecutive checks', function () {
        expect(isOddOrEven('cat')).to.equal('odd');
        expect(isOddOrEven('alabala')).to.equal('odd');
        expect(isOddOrEven('is it even')).to.equal('even');
    });
});