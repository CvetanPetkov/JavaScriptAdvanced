class SortedList {

    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(Number(element));
        this.collection = this.collection.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (Number(index) >= 0 && Number(index) < this.size) {
            let arr1 = this.collection.slice(0, Number(index));
            let arr2 = this.collection.slice(Number(index) + 1, this.size);
            this.collection = arr1.concat(arr2);
            this.collection = this.collection.sort((a, b) => a - b);
            this.size--;
        }
    }

    get(index) {
        if (Number(index) >= 0 && Number(index) < this.size) {
            return this.collection[Number(index)];
        }
    }
}

let test = SortedList();
test.add(5);
test.add(2);
test.add(3);
test.remove(1);
console.log(test.get(3));

console.log(test.collection);
console.log(test.size);
