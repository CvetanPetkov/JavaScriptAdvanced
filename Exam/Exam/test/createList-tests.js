let createList = require('../createList').createList;
let expect = require('chai').expect;

describe('List tests', function () {

    let createlist = createList;
    beforeEach(function () {
        createlist = createList();
    });

    it('return correct', function () {
        expect(typeof createlist).to.equal('object');
    });
    it('return correct', function () {
        expect(createlist.hasOwnProperty('add')).to.equal(true);
    });
    it('return correct', function () {
        expect(createlist.hasOwnProperty('shiftLeft')).to.equal(true);
    });
    it('return correct', function () {
        expect(createlist.hasOwnProperty('shiftRight')).to.equal(true);
    });
    it('return correct', function () {
        expect(createlist.hasOwnProperty('swap')).to.equal(true);
    });
    it('return correct', function () {
        expect(createlist.hasOwnProperty('toString')).to.equal(true);
    });

    it('return correct', function () {
        expect(createlist.toString()).to.equal('');
    });
    it('return correct', function () {
        createlist.shiftLeft();
        expect(createlist.toString()).to.equal('');
    });
    it('return correct', function () {
        createlist.add(-2);
        createlist.shiftLeft();
        expect(createlist.toString()).to.equal('-2');
    });
    it('return correct', function () {
        createlist.add(-2);
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('-2');
    });
    it('return correct', function () {
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('');
    });
    it('return correct', function () {
        createlist.add(2);
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('2');
    });
    it('return correct', function () {
        createlist.add();
        expect(createlist.toString()).to.equal('');
    });
    it('return correct', function () {
        createlist.add({});
        createlist.add(new Map());
        createlist.add([2, 3.14]);
        expect(createlist.toString()).to.equal('[object Object], [object Map], 2,3.14');
    });
    it('return correct', function () {
        createlist.add({name:'pesho', age:23});
        createlist.add({name:'ivan', age:32});
        expect(createlist.toString()).to.equal('[object Object], [object Object]');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        expect(createlist.toString()).to.equal('1, two, 3');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.shiftLeft();
        expect(createlist.toString()).to.equal('two, 3, 1');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.shiftLeft();
        createlist.shiftLeft();
        expect(createlist.toString()).to.equal('3, 1, two');
    });
    it('return correct', function () {
        createlist.add(2);
        createlist.shiftLeft();
        expect(createlist.toString()).to.equal('2');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('four, 1, two, 3');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.shiftRight();
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('3, four, 1, two');
    });

    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(0, 3);
        expect(createlist.toString()).to.equal('four, two, 3, 1');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(0, 3)).to.equal(true);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1, 1);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1, 1);
        createlist.swap(1, 2);
        expect(createlist.toString()).to.equal('1, 3, two, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1, 1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(-1, 1);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(-1, 1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1, -1);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1, -1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1, -1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1.12, 1);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1.12, 1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1, 1.4);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1, 1.4)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(7, 1);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(7, 1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1, 7);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1, 7)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(-1, -1);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(-1, -1)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(1.34, 1.23);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1.34, 1.23)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.swap(31, 12);
        expect(createlist.toString()).to.equal('1, two, 3, four');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(31, 12)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        expect(createlist.swap(1, 2)).to.equal(true);
    });
    it('return correct', function () {
        createlist.swap(1, 3);
        expect(createlist.toString()).to.equal('');
    });
    it('return correct', function () {
        expect(createlist.swap(1, 3)).to.equal(false);
    });
    it('return correct', function () {
        expect(createlist.swap(0, 0)).to.equal(false);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3);
        createlist.add(['four']);
        createlist.add();
        expect(createlist.toString()).to.equal('1, two, 3, four, ');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.add(3.5);
        createlist.add(['four']);
        createlist.add();
        expect(createlist.toString()).to.equal('1, two, 3.5, four, ');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.shiftRight();
        createlist.add(['four']);
        createlist.add();
        createlist.shiftLeft();
        createlist.add({});
        createlist.swap(0, 3);
        expect(createlist.toString()).to.equal('two, four, , 1, [object Object]');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.shiftRight();
        createlist.add(['four']);
        createlist.add();
        createlist.shiftLeft();
        createlist.add({});
        expect(createlist.swap(0, 3)).to.equal(true);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('two, 1');
        createlist.add(['four']);
        createlist.add();
        expect(createlist.toString()).to.equal('two, 1, four, ');
        createlist.shiftLeft();
        createlist.add({});
        expect(createlist.toString()).to.equal('1, four, , two, [object Object]');
        expect(createlist.swap(0, 3)).to.equal(true);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.add('two');
        expect(createlist.toString()).to.equal('1, two');
        createlist.add(['four']);
        createlist.add();
        expect(createlist.toString()).to.equal('1, two, four, ');
        createlist.shiftLeft();
        createlist.add({});
        expect(createlist.toString()).to.equal('two, four, , 1, [object Object]');
        expect(createlist.swap(0, 3)).to.equal(true);
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.swap(1, 2);
        createlist.shiftLeft();
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('1');
    });
    it('return correct', function () {
        createlist.add(1);
        createlist.swap(1, 2);
        createlist.add(2);
        createlist.shiftLeft();
        createlist.shiftRight();
        expect(createlist.toString()).to.equal('1, 2');
    });
});