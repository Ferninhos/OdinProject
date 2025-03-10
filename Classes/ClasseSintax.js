class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
};

const user = new User("Fliper");
user.sayHi();