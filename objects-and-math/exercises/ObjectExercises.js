let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   id: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   id: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let notSoSuperChimpTwo = {
   name: 'Brad',
   species: 'chimpanzee',
   mass: 11,
   age: 6,
   id: 3,
   move: function () {return Math.floor(Math.random()*11)}
}

let doggy = {
   name: 'Leroy',
   species: 'beagle',
   mass: 14,
   age: 5,
   id: 4,
   move: function () {return Math.floor(Math.random()*11)}
}

let tardigrade = {
   name: 'Almina',
   species: 'tardigrade',
   mass: 0.0000000001,
   age: 1,
   id: 5,
   move: function () {return Math.floor(Math.random()*11)}
}

let crew = [superChimpOne, salamander, notSoSuperChimpTwo, doggy, tardigrade];

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their id is ${animal.id}`
}

function fitnessTest(candidates){
   let results = [], numSteps = 0, turns = 0;

       while(numSteps < 20){
       numSteps += candidates.move();
       turns++;
       }
       results.push(`${candidates.name} took ${turns} turns to take 20 steps.`);
   
   return results;
  }
  console.log(` ${fitnessTest(superChimpOne)}\n ${fitnessTest(salamander)}\n ${fitnessTest(notSoSuperChimpTwo)}\n ${fitnessTest(doggy)}\n ${fitnessTest(tardigrade)}`)
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!