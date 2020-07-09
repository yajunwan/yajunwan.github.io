//Work with strings
//Word indo
let myStr = prompt("Please enter a string");
alert("The length of the string you entered is: "+myStr.length);
alert(`The lowercase of the string is ${myStr.toLowerCase()}, and the uppercase of that is ${myStr.toUpperCase()}`);

//Vowel count
let strArr = Array.from(myStr);
let count = 0;
strArr.forEach(letters => {
    if ("aeiou".indexOf(letters) !== -1){
        count++
    }
});
alert(`There are ${count} vowels in the string`);

//Backwards word
function reverse(str){
    if (str == ""){
        return "";
    }
    else{
        return reverse(str.substr(1))+str.charAt(0);
    }
}
alert(reverse(myStr));