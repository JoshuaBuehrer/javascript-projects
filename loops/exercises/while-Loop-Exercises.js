//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
var startingFuel = 0;
var astronautCount = 0;
var shuttleAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');

startingFuel = input.question(`what is the starting fuel level?`);
startingFuel = Number(startingFuel);

while (startingFuel <= 5000 || startingFuel > 30000) {
  startingFuel = input.question(`invalid number`)
  startingFuel = Number(startingFuel);
} 
console.log(`the starting fuel is ${startingFuel}`);
// b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

astronautCount = input.question(`how many astronauts? `);
astronautCount = Number(astronautCount);

while (astronautCount <= 0|| astronautCount >= 8) {
  astronautCount = input.question(`Too many astronauts `)
  astronautCount = Number(astronautCount);
} 
console.log(`number of astronauts: ${astronautCount}`);
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
amountOfFuel = 100 * astronautCount;
while (startingFuel >= amountOfFuel) {
  startingFuel = startingFuel - amountOfFuel;
  shuttleAltitude = shuttleAltitude + 50
} console.log(`the shuttle gained an altitude of ${shuttleAltitude} km.`);

// *Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

// If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude >= 2000) {
  console.log(`orbit achieved!`)
} else (
  console.log(`failed to reach orbit.`)
)