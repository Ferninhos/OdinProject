/*let user = {
    name: "Jonh",
    age: 18,
    get fullName() {
        return `${this.name}: ${this.age}`;
    },
    set fullName(value) {
        [this.name, this.age] = value.split(" ")
    }
}; */

let player = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4){
        console.log("maior que 4 digitos pls!");
        return;
    }
    this._name = value;
  }
};
player.name = "Monkey";
console.log(player.name);
player.name = "mok";