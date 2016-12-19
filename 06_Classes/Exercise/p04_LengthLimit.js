class Stringer {

    constructor (string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(length) {
        this.innerLength += Number(length);
    }

    decrease(length) {
        if (this.innerLength - Number(length) < 3) {
            this.innerLength = 0;
        } else {
            this.innerLength -= Number(length);
        }
    }

    toString() {
        if (this.innerLength == 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.substr(0, this.innerLength) + '...';
        } else {
            return `${this.innerString}`;
        }
    }
}