let nuke = require('../p05_ArmageDOM').nuke;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML =
    `<div id="target">
        <div class="nested target">
            <p>This is some text</p>
        </div>
        <div class="target">
            <p>Empty div</p>
        </div>
        <div class="inside">
            <span class="nested">Some more text</span>
            <span class="target">Some more text</span>
        </div>
    </div>`;

describe('nuke tests', function () {

    beforeEach(function () {
        $('#name').val('');
        $('#income').val('');
    });
    afterEach(function () {
        $('#name').val('');
        $('#income').val('');
    });

    it('return correct', function () {
        expect().to.equal();
    });
});