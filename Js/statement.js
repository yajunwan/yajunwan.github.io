//Repeat statement
//Carousel
let turns = Number(prompt("Please enter your turns"));
for (let i = 0;i<turns;i++){
    console.log(`Turn number is ${i+1}`);
}
var Actor = {"name": "RajiniKanth"};

//If use "`" to quote a string, the format of the string will 
//remain the same as coded in the coding area
var text =
`Now is the time for all good men like ${Actor.name}
to come to the 
aid of 
their
country!`;
console.log(text);

//Input validation
let number
while(number = Number(prompt("Please enter a number"))<50 || (number =>100));

//FizzBuzz
for (let i = 1;i<101;i++){
    if(i%3==0){
        if(i%5==0){
            console.log("FizzBuzz");
            continue;
        }
        console.log("Fizz");
        continue;
    }
    else{
        if (i%5==0){
            console.log("Buzz");
            continue;
        }
        console.log(`${i}`);       
    }
}
