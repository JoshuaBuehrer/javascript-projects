// Initialize Variables below
let date = 'Monday '+ '2019-03-18';
let time = ('10:05:34' + ' AM');
let astronautCount	= 7;
let astronautStatus = 'ready';
let averageAstronautMassKg	= 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp	= -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = false;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    tooManypeople = true;
}   else {
    tooManypeople = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus == 'ready') {
    astronautReady = true
} else {
    astronautReady = false
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    tooMuchWeight = true
} else {
    tooMuchWeight = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp &&  fuelTempCelsius < maximumFuelTemp) {
    fuelTempGood = true
}   else {
    fuelTempGood = false
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel == '100%') {
   tankFull = true
} else {
    tankFull = false
}
// add logic below to verify the weather status is clear
if (weatherStatus == 'clear') {
    clearWeather = true
}   else {
    clearWeather = false 
}
// Verify shuttle launch can proceed based on above conditions
if (!tooManypeople && !tooMuchWeight && astronautReady && fuelTempGood && tankFull && clearWeather) {
    preparedForLiftOff = true
}   else {
    preparedForLiftOff = false
}

if (preparedForLiftOff){
console.log('date: ' + date + ' time: ' + ' astronautCount: ' + astronautCount +' crew mass: ' + crewMassKg + ' fuel mass: ' + fuelMassKg + ' shuttle mass: ' + shuttleMassKg + ' total mass: ' + totalMassKg + ' fuelTempCelsius: ' + ' weather status: ' + weatherStatus + ' :have a safe trip astronauts!')
} else{
    console.log('Shuttle Failed')
}