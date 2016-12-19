let isSymmetric = require('../p02_CheckForSymmetry').isSymmetric;
let expect = require('chai').expect;

describe('Test isSymmetric function', function () {
    it('should return true for [1,2,3,2,1]', function () {
        expect(isSymmetric([1,2,3,2,1])).to.be.equal(true);
    });
    it('should return true for [1,2,2,1]', function () {
        expect(isSymmetric([1,2,2,1])).to.be.equal(true);
    });
    it('should return true for [1]', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('should return true for []', function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it('should return false for [1,2,3,2,4,1]', function () {
        expect(isSymmetric([1,2,3,2,4,1])).to.be.equal(false);
    });
    it('should return false for 1,2,2,1', function () {
        expect(isSymmetric(1,2,2,1)).to.be.equal(false);
    });
    it('should return false for pesho', function () {
        expect(isSymmetric('pesho')).to.be.equal(false);
    });
    it('should return false for pesep', function () {
        expect(isSymmetric('pesep')).to.be.equal(false);
    });
    it('should return false for nonArray', function () {
        expect(isSymmetric({})).to.be.equal(false);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function() {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function() {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5]);
        expect(symmetric).to.be.equal(false);
    });
});
