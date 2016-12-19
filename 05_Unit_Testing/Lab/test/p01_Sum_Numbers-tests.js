let sum = require('../p01_Sum_Numbers').sum;
let expect = require('chai').expect;

describe('Test sum function', function () {
    it('should return 3 for [1,2]', function () {
        expect(sum([1,2])).to.be.equal(3);
    });
    it('should return 1 for [1]', function () {
        expect(sum([1])).to.be.equal(1);
    });
    it('should return 0 for empty arr', function () {
        expect(sum([])).to.be.equal(0);
    });
    it('should return 3 for [1.5,2.5,-1]', function () {
        expect(sum([1.5,2.5,-1])).to.be.equal(3);
    });
    it('should return Nan for invalid data', function () {
        expect(sum('pesho')).to.be.Nan;
    });
});