let x = "abc";
switch (x) {
case "abc":
console.log("x = abc");
// break omitted: the next block is also run!
case "def":
console.log("x = def");
break;
}

//Add Conditions exercise
let day = prompt("Enter a day");
switch(day){
    case "Monday":
        console.log("The next day is Tuesday");
        break;
    case "Tuesday":
        console.log("The next day is Wednesday");
        break;
    case "Wednesday":
        console.log("The next day is Thursday");
        break;
    case "Thursday":
        console.log("The next day is Friday");
        break;
    case "Friday":
        console.log("The next day is Saturday");
        break;  
    case "Saturday":
        console.log("The next day is Sunday");
        break;
    case "Sunday":
        console.log("The next day is Monday");
        break;
    default:
        console.log("Your input is invalid");  
}

//Following Second
let input = prompt("Please enter a timestamp in the form of hh/mm/ss");
input = input.split("/");
let hours = Number(input[0]), minutes = Number(input[1]), seconds = Number(input[2]);
if (seconds+1 == 60) {
    if (minutes+1 == 60){
        hours ++;
        minutes = 0;
    }
    else{
        minutes++;
    }
    seconds = 0;
}
else{
    seconds++;
}

console.log("After one second, the time will be "+hours+": "+minutes+": "+seconds);