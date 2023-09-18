//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let cargoHold = [
    ["water bottles", "meal packs", "snacks", "chocolate"],
    ["space suits", "jet packs", "tool belts", "thermal detonators"],
    ["parrots", "cats", "moose", "alien eggs"],
    ["blankets", "pillows", "eyepatches", "alarm clocks"],
]
cargoHold[1],[2],[3].sort();
console.log(cargoHold)
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
console.log(cargoHold.push('table'))
console.log('table')
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(cargoHold[3])
console.log(cargoHold[1][3])
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(cargoHold[1]);
console.log(cargoHold[2][1])
console.log('element26: undefined')
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
console.log(cargoHold[1][2][3])