console.log("hello world,this is JS");
//Play with variables
//Improved Hello
console.log("Hello "+prompt("May I have your name plz?"));

//VAT calculation
let price = Number(prompt("Please provide with a raw price"));
let final_price = price * 1.206;
console.log("The final price with VAT would be: "+final_price);

//Celsius to Fahrenheit
let Fah_deg = Number(prompt("Enter degrees in Fahrenheit"));
console.log("The entered degree after transfering to Celsius is: "+(Fah_deg-32)*5/9);

//Variable swapping
let a = 1;
let b = 2;
console.log("The original value of a is "+a+", and the original value of b is "+b);
let c = a;
a = b;
b = c;
console.log("After swapping, the value of a is "+a+", and the original value of b is "+b);

