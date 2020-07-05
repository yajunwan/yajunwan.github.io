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
alert(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
alert(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

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
alert(`Its circumference is ${circle.circumference()}`);
alert(`Its area is ${circle.area()}`);

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

alert(account.describe());
account.credit(250);
account.credit(-80);
alert(account.describe());
