let sharedObject = require('../shared-object').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe('sharedObject tests', function () {

    beforeEach(function () {
        $('#name').val('');
        $('#income').val('');
    });
    afterEach(function () {
        $('#name').val('');
        $('#income').val('');
    });

    it('return correct', function () {
        expect(sharedObject.name).to.equal(null);
    });
    it('return correct', function () {
        expect(sharedObject.income).to.equal(null);
    });
    it('return correct', function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.equal(null);
    });
    it('return correct', function () {
        sharedObject.changeIncome('');
        expect(sharedObject.income).to.equal(null);
    });
    it('return correct', function () {
        sharedObject.changeName('qwerty');
        expect(sharedObject.name).to.equal('qwerty');
    });
    it('return correct', function () {
        sharedObject.changeName('qwerty');
        expect($('#name').val()).to.equal('qwerty');
    });
    it('return correct', function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.equal('qwerty');
    });

    it('return correct', function () {
        sharedObject.changeName(67);
        expect(sharedObject.name).to.equal(67);
    });
    it('return correct', function () {
        sharedObject.changeIncome(-5);
        expect(sharedObject.income).to.equal(null);
    });
    it('return correct', function () {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.equal(null);
    });
    it('return correct', function () {
        sharedObject.changeIncome(5);
        expect(sharedObject.income).to.equal(5);
    });
    it('return correct', function () {
        sharedObject.changeIncome(5);
        expect($('#income').val()).to.equal('5');
    });
    it('return correct', function () {
        sharedObject.changeIncome(2.4);
        expect(sharedObject.income).to.equal(5);
    });
    it('return correct', function () {
        $('#name').val('pesho');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('pesho');
    });
    it('return correct', function () {
        $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('pesho');
    });
    it('return correct', function () {
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(5);
    });
    it('return correct', function () {
        $('#income').val(34);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(34);
    });
    it('return correct', function () {
        $('#income').val(2.3);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(34);
    });
    it('return correct', function () {
        $('#income').val('pesho');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(34);
    });
    it('return correct', function () {
        $('#income').val(-2);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(34);
    });
    it('return correct', function () {
        $('#income').val(0);
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(34);
    });
    it('return correct', function () {
        $('#income').val({income:45});
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(34);
    });
});