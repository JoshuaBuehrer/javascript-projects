//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score)
    }
    average() {
        let sum = 0

        for(let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i]
        } let average = sum / this.scores.length;
        return Math.round(average * 10) / 10;
    }
    status() {
        if(this.average() >= 90)
        return `${this.name} earned an average test score of ${this.average()}% and has a status of Accepted.`

        if(this.average() >= 80 || this.average <= 89)
        return `${this.name} earned an average test score of ${this.average()}% and has a status of Reserve.`

        if(this.average() >= 70 || this.average <= 79)
        return `${this.name} earned an average test score of ${this.average()}% and has a status of Probationary.`

        if(this.average() < 70)
        return `${this.name} earned an average test score of ${this.average()}% and has a status of Rejected.`
    }
}

let bubbaBear = new CrewCandidate('Bubba bear', 135, [88,85,90])
let merryMaltese = new CrewCandidate('merry Maltese', 1.5, [93,88,97])
let gladGator = new CrewCandidate('Glad gator', 225, [75,78,62])
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

while (gladGator.average() < 100) {
   gladGator.addScore(100)
   
}
console.log(gladGator.status())