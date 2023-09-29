const input = require('readline-sync');
let str = "LaunchCode";
userAnswer = "";
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(3)+str.slice(0,3) 
console.log(str2)
//Use a template literal to print the original and modified string in a descriptive phrase.
let phrase = `${str} ${ str2}`;
console.log (phrase)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
userAnswer = input.question("how many letters would you like relocated?")
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userAnswer > 10) {
console.log("Error: input longer then world")
} else {
    console.log(`you want to move ${userAnswer}?`) 
}