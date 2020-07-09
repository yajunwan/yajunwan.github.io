//Write Functions code test

//Improved Hello()
function sayHello(firstName, lastName){
    let message = (`Hello, ${firstName} ${lastName}`);
    console.log(message);
}
let name = prompt("May I have your name please?");
name = name.split(" ");
sayHello(name[0],name[1]);

//Number Squaring
let square1 = (x) => Math.pow(x,2);
let square2 = (x) => Math.pow(x,2);

for (let i=0;i<5;i++){
    console.log(square1(i));
}

//Circumference and area of a circle
function calculate_circle(radius){
    let cir = 2*Math.PI*Number(radius);
    console.log(cir);
    let area = Math.PI*Math.pow(radius,2);
    console.log(`The circumference of circle is ${cir}
The area of circle is ${area}`);
}
calculate_circle(Number(prompt("Enter the radius of the circle")));
