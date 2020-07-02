//Create your first object
// Improve our example RPG program to add an experience property named xp to the character. Its
// initial value is 0. Experience must appear in character description
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name}'s health is ${this.health} and strength is ${this.strength}`;
    }
};

//Modelling a dog

const dog = {
    name:"Fang",
    species:" boarhound",
    size:"75",
    bark() {
        return `Grrr! Grrr`;
    }
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Modelling a circle
const r = Number(prompt("Enter the circle radius:"));
const circle = {
    radius: r,
    circumference(){
        return 2*Math.PI*this.radius;
    },
    area(){
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//Modelling a bank account
const account = {
    name:"Alex",
    balance:0,
    credit(value){
        this.balance += value;
    },
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`;
    }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
