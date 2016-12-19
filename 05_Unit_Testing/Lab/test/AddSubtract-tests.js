let createCalculator = require('../p04_AddSubtract').createCalculator;
let expect = require('chai').expect;

describe('Test Calculator function', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 0 for get()', function () {
        expect(calc.get()).to.be.equal(0);
    });
    it('should return 5 for add(2,3)', function () {
        calc.add(2),calc.add(3);
        let actual = calc.get();
        expect(actual).to.be.equal(5);
    });
    it('should return -5 for subtract(3,2)', function () {
        calc.subtract(3),calc.subtract(2);
        let actual = calc.get();
        expect(actual).to.be.equal(-5);
    });
    it('should return 4.2 for add subtract(5.3,1.1)', function () {
        calc.add(5.3),calc.subtract(1.1);
        let actual = calc.get();
        expect(actual).to.be.equal(5.3-1.1);
    });
    it('should return 2 for add subtract(10,7,-2,-1)', function () {
        calc.add(10),calc.subtract(7),calc.add(-2),calc.subtract(-1);
        let actual = calc.get();
        expect(actual).to.be.equal(2);
    });
    it('should return NaN for add(hello)', function () {
        calc.add('hello');
        let actual = calc.get();
        expect(actual).to.be.NaN;
    });
    it('should return NaN for subtract(hello)', function () {
        calc.subtract('hello');
        let actual = calc.get();
        expect(actual).to.be.NaN;
    });
});