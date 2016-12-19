function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }

        toString() {
            return `Element: ${this.constructor.name.substr(0, this.constructor.name.length - 5)}\nSort: ${this.melonSort}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(weight) * Number(melonSort.length);
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return super.toString() + `\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(weight) * Number(melonSort.length);
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return super.toString() + `\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(weight) * Number(melonSort.length);
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return super.toString() + `\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(weight) * Number(melonSort.length);
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return super.toString() + `\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = super.constructor.name;
            this.counter = 0;
        }

        morph() {
            this.counter++;
            if (this.counter % 4 == 0) {
                this.element = 'Water';
            }
            if (this.counter % 4 == 1) {
                this.element = 'Fire';
            }
            if (this.counter % 4 == 2) {
                this.element = 'Earth';
            }
            if (this.counter % 4 == 3) {
                this.element = 'Air';
            }
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}



let watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());