let SortedList = require('../sortedList').SortedList;
let expect = require('chai').expect;

describe('Tests for SortedList class', function () {

    let sortedList;
    beforeEach(function () {
        sortedList = new SortedList();
    });

    it('return correct', function () {
        expect(sortedList instanceof SortedList).to.equal(true);
    });
    it('return correct', function () {
        expect(typeof sortedList.add).to.equal('function');
    });
    it('return correct', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
    });
    it('return correct', function () {
        expect(typeof sortedList.remove).to.equal('function');
    });
    it('return correct', function () {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
    });
    it('return correct', function () {
        expect(typeof sortedList.get).to.equal('function');
    });
    it('return correct', function () {
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
    });
    it('return correct', function () {
        expect(typeof sortedList.vrfyRange).to.equal('function');
    });
    it('return correct', function () {
        expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
    });
    it('return correct', function () {
        expect(typeof sortedList.sort).to.equal('function');
    });
    it('return correct', function () {
        expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
    });
    it('return correct', function () {
        expect(typeof sortedList.size).to.equal('number');
    });
    it('return correct', function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
    });


    it('return correct', function () {
        sortedList.add(5);
        expect(sortedList.get(0)).to.equal(5);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        expect(sortedList.get(0)).to.equal(1);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        expect(sortedList.size).to.equal(2);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(-7.5);
        expect(sortedList.get(0)).to.equal(-7.5);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        sortedList.remove(0);
        expect(sortedList.get(0)).to.equal(5);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        sortedList.remove(0);
        expect(sortedList.size).to.equal(1);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        expect(sortedList.size).to.equal(2);
    });
    it('return correct', function () {
        expect(() => sortedList.remove(0)).to.throw(Error);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        expect(() => sortedList.remove(-2)).to.throw(Error);
    });
    it('return correct', function () {
        sortedList.add(5);
        sortedList.add(1);
        expect(() => sortedList.remove(7)).to.throw(Error);
    });


    it('return correct', function () {
        sortedList.add('pesho');
        expect(sortedList.get(0)).to.equal('pesho');
    });
});