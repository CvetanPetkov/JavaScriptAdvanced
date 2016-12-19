let list = require('../list').list;
let expect = require('chai').expect;

describe('List tests', function () {

    it('return correct', function () {
        expect(list.toString()).to.equal('');
    });
    it('return correct', function () {
        expect(typeof list).to.equal('object');
    });
    it('return correct', function () {
        expect(typeof list.add).to.equal('function');
    });
    it('return correct', function () {
        expect(typeof list.delete).to.equal('function');
    });
    it('return correct', function () {
        expect(typeof list.toString).to.equal('function');
    });
    it('return correct', function () {
        expect(list.hasOwnProperty('add')).to.equal(true);
    });
    it('return correct', function () {
        expect(list.hasOwnProperty('delete')).to.equal(true);
    });
    it('return correct', function () {
        expect(list.hasOwnProperty('toString')).to.equal(true);
    });
    it('return correct', function () {
        list.add(1);
        expect(list.toString()).to.equal('1');
    });
    it('return correct', function () {
        list.add({});
        expect(list.toString()).to.equal('1, [object Object]');
    });
    it('return correct', function () {
        list.delete(1);
        list.add('two');
        list.add(3);
        expect(list.toString()).to.equal('1, two, 3');
    });
    it('return correct', function () {
        expect(list.delete(1)).to.equal('two');

    });
    it('return correct', function () {
        expect(list.delete(4)).to.equal(undefined);
    });
    it('return correct', function () {
        expect(list.delete(3.5)).to.equal(undefined);
    });
    it('with floating point should not delete any elements',function () {
        list.delete(3.14);
        expect(list.toString()).equal('1, 3');
    });
    it('return correct', function () {
        expect(list.delete('one')).to.equal(undefined);
    });
    it('return correct', function () {
        expect(list.delete({})).to.equal(undefined);
    });
    it('return correct', function () {
        expect(list.toString()).to.equal('1, 3');
    });
    it('return correct', function () {
        expect(list.delete(-1)).to.equal(undefined);
    });
    it('return correct', function () {
        expect(list.toString()).to.equal('1, 3');
    });
    it('return correct', function () {
        list.delete(0);
        list.delete(0);
        expect(list.toString()).to.equal('');
    });
    it('with a correct index should return correct item',function () {
        list.add(5);
        list.add(10);
        list.add(16);
        expect(list.delete(2)).to.equal(16,'Delete deleted an existing value');
    });
    it('with a correct index should return correct item',function () {
        list.delete(0);
        list.delete(0);
        list.add(5);
        list.add(10);
        list.add(16);
        list.delete(1);
        expect(list.toString()).to.equal('5, 16','Delete deleted an existing value');
    })
});