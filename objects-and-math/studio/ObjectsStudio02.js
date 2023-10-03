let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
// Code your orbitCircumference function here:

function orbitCircumference(radiusOrAltitude) {
let c = Math.floor(2)*Math.PI*radiusOrAltitude;

return c;
}
// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, orbitalSpeed = 28000) {
let time = numOrbits * Math.round((orbitCircumference(radius)/orbitalSpeed)*100)/100;

let log = (`The mission will travel ${orbitCircumference(radius)} km around the planet, and it will take ${time} hours to complete`);
 return time;
}
// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(idNumbers){

  return idNumbers[Math.floor(Math.random()*3)]
}
// Code your oxygenExpended function here:
function oxygenEpended(randomCrew){
  
  luckyCan = selectRandomEntry(randomCrew);
  
  let time = missionDuration(3);

  let oxygenUsed = luckyCan.o2Used(time);
  
  let roundOxygen = Math.floor(oxygenUsed*1000)/1000;
  return `${luckyCan.name} will perform the spacewalk, which will last ${time} hours and require ${roundOxygen} kg of oxygen.`
}
console.log(oxygenEpended(crew))

// Candidate data & crew array.