class ObjectCreator {
    name;

    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return this.name;
    }
}

const myObject = new ObjectCreator("Aditya");
console.log(myObject.name);
console.log(myObject.sayMyName());
