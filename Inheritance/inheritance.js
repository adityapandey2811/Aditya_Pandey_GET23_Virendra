class Vehicle {
    #capacity;
    constructor(name, capacity) {
        this.name = name;
        this.#capacity = capacity
    }
    get capacity(){
        return this.#capacity;
    }
    set capacity(capacity) {
        this.#capacity = capacity;
    }
    startEngine() {
        console.log(`${this.name} -> starts, capacity -> ${this.#capacity}`)
    }
    stopEngine() {
        console.log(`${this.name} -> stop, capacity -> ${this.#capacity}`)
    }
    run() {
        console.log(`${this.name} run on manual`);
    }

    static brake() {
        console.log("Static Method");
    }
    callCapacity() {
        console.log(`${this.name} has ${this.#capacity} capacity`);
    }
}

class Two_Wheeler extends Vehicle {
    constructor(name, capacity, tyre, engine) {
        super(name,capacity);
        this.tyre = tyre;
        this.engine = engine;
    }
}

class Four_Wheeler extends Vehicle {
    constructor(name, capacity, tyre, engine) {
        super(name,capacity);
        this.tyre = tyre;
        this.engine = engine;
    }
}

let vehicle2 = new Two_Wheeler('BMW', 7000, 7, 5000);
let vehicle3 = new Four_Wheeler('Bentley', 30000, 24, 16000);

