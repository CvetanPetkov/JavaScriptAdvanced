let Console = require('../p05_Console').Console;
let expect = require('chai').expect;

describe('Tests for Console', function () {

    it('return correct', function () {
        expect(typeof Console.writeLine).to.equal('function');
    });
    it('return correct', function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });
    it('return correct', function () {
        expect(Console.writeLine('singleArgument')).to.equal('singleArgument');
    });
    it('return correct', function () {
        expect(Console.writeLine({name: 'Pesho'})).to.equal('{"name":"Pesho"}');
    });
    it('return correct', function () {
        expect(() => Console.writeLine(3, 'rtrte')).to.throw(TypeError);
    });
    it('return correct', function () {
        expect(() => Console.writeLine('text{0} text{1}', 'one', 'two', 'three')).to.throw(RangeError);
    });
    it('return correct', function () {
        expect(() => Console.writeLine('text{0} text{1} text{2}', 'one', 'two')).to.throw(RangeError);
    });
    it('return correct', function () {
        expect(() => Console.writeLine('text{0} text{5}', 'one', 'two')).to.throw(RangeError);
    });
    it('return correct', function () {
        expect(Console.writeLine('text{0} text{1}', 'one', 'two')).to.equal('textone texttwo');
    });
    it('return correct', function () {
        expect(Console.writeLine('{0} {1}', 'one', 'two')).to.equal('one two');
    });
    it('return correct', function () {
        let obj = {'name': 'stamat'};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj));
    });
});