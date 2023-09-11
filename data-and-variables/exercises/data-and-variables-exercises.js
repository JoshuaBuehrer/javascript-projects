
// Print the results of the trip to the moon below// Declare and assign the variables below
let spaceShuttle = 'determination';
let shuttleSpeedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToMoon = 384400;
let milesPerKil = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof kilometersToMars);
console.log(typeof kilometersToMoon);
console.log(typeof milesPerKil);
// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKil;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttle + ' will take ' + daysToMars + ' days to reach mars' );
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKil;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttle + ' will take ' + daysToMoon + ' days to reach the moon');
