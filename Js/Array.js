//Manipulate arrays
//Array Maximum
const myArray1 = [3,11,7,2,9,10];
let max = myArray1[0];
for (const num of myArray1) {
    if (num>max){
        max = num;
    } 
}
alert(max);

//List of words
const myArray2 = [];
const words = () =>{
    flag=true;
    while(flag){
        let user_input = prompt("Please enter a word, type 'stop' to exit");
        if (user_input == "stop") {
            flag = false;
        }
        else{
            myArray2.push(user_input);
        }
    }
    alert(myArray2);
};
words();





