class Person {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }

}

class Teacher extends Person {

    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        return `${super.toString().slice(0, -1)}, subject: ${this.subject})`;
    }

}

class Student extends Person {

    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        return `${super.toString().slice(0, -1)}, course: ${this.course})`;
    }

}

function extendClass(someClass) {
    someClass.prototype.species = 'Human';
    someClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };

    function toSpeciesString() {
        return `I am a Human. ${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
}


// let p = new Teacher("Gosho", 'gosh@gosh.com', "Graphics");
// console.log(p.toString());
// let s = new Student("Stamat", 'stamcho@stamishteto.bg', 666);
// console.log(s.toString());
// extendClass(Person);
// console.log(s.toSpeciesString());