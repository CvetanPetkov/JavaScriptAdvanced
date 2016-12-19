let lookupChar = require('../p02_CharLookup').lookupChar;
let expect = require('chai').expect;

describe('lookupChar tests', function () {
    it('return undefined', function () {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });
    it('return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined);
    });
    it('return undefined', function () {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });
    it('return undefined', function () {
        expect(lookupChar('pesho', 3.12)).to.equal(undefined);
    });
    it('return incorrect index', function () {
        expect(lookupChar('gosho', 13)).to.equal('Incorrect index');
    });
    it('return incorrect index', function () {
        expect(lookupChar('gosho', -1)).to.equal('Incorrect index');
    });
    it('return incorrect index', function () {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index');
    });
    it('return correct char', function () {
        expect(lookupChar('pesho', 0)).to.equal('p');
    });
    it('return correct char', function () {
        expect(lookupChar('pesho', 3)).to.equal('h');
    });
});