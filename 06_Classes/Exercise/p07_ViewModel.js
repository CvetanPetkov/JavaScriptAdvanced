class Textbox {

    constructor(selector, regex) {
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(selector);

        let that = this;    // THAT IS THE OUTER CONTEXT
        $(selector).on('input change', function () {
            that.value = $(this).val(); // SEND IN THE OUTER SETTER THIS WITCH IS
        });                             // THE VAL OF THE SELECTED ELEMENT
    }

    set value(value) {
        $(this.selector).val(value);
    }

    get value() {
        return $(this.selector).val();
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test($(this.selector).val());

    }
}
let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () {
    console.log(textbox.value);
});
