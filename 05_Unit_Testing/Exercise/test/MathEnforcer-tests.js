let mathEnforcer = require('../p03_MathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('mathEnforcer tests', function () {
    describe('addFive', function () {
        it('return correct', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('return correct', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('return correct', function () {
            expect(mathEnforcer.addFive(1.2)).to.closeTo(6.2, 0.01);
        });
        it('return undefined', function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.addFive()).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.addFive({name:'pesho'})).to.equal(undefined);
        });
    });
    describe('subtractTen', function () {
        it('return correct', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('return correct', function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('return correct', function () {
            expect(mathEnforcer.subtractTen(11.2)).to.closeTo(1.2, 0.01);
        });
        it('return undefined', function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.subtractTen({name:'pesho'})).to.equal(undefined);
        });
    });
    describe('sum', function () {
        it('return correct', function () {
            expect(mathEnforcer.sum(5,3)).to.equal(8);
        });
        it('return correct', function () {
            expect(mathEnforcer.sum(-5,3)).to.equal(-2);
        });
        it('return correct', function () {
            expect(mathEnforcer.sum(-5, 2.13)).to.closeTo(-2.87, 0.01);
        });
        it('return correct', function () {
            expect(mathEnforcer.sum(1.2, 4.45)).to.closeTo(5.65, 0.01);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum('pesho','gosho')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum('pesho',3)).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum(3,'pesho')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum('pesho', '')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum('','pesho')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum('pesho')).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum()).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum(1,{name:'pesho'})).to.equal(undefined);
        });
        it('return undefined', function () {
            expect(mathEnforcer.sum({name:'pesho'},1)).to.equal(undefined);
        });
    });
});