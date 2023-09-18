//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.

let num = String(1001);

console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = (123.45);
let num3 = num.toString().replace(".","");
console.log(num2.length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (num = 123.45){
    console.log('decimal')
}   else{
    console.log('not decimal')
}