// CODE here for your Lambda Classes


class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
    }
}

class Instructor extends Person{
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
       return `Today we are learning ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    randomGrade(student) {
        return `${student.grade}`
    }
}

class Student extends Person{
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = 100;
    }
    listSubjects(subject) {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge for ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}!`
    }
}

const instructorOne = new Instructor({
    name: '2pac',
    age: 25,
    location: 'Los Angeles',
    gender: 'Male',
    specialty: 'Rapping',
    favLanguage: 'West coast slang',
    catchPhrase: 'West-siiide',

})

const instructorTwo = new Instructor({
    name: 'Biggie',
    age: 25,
    location: 'New York',
    gender: 'Male',
    specialty: 'Slanging Dope',
    favLanguage: 'East coast slang',
    catchPhrase: 'Kick in the door, waving the four four',
})

const studentOne = new Student({
    name: 'Future Hndrxx',
    age: 27,
    location: 'Atlanta',
    gender: 'Male',
    previousBackground: 'Pill popper',
    className: 'Purple Reign',
    favSubjects: ['Stacking Chips', 'Double cupping']
  })

const studentTwo = new Student({
    name: 'French Montana',
    age: 30,
    location: 'South Bronx',
    gender: 'Male',
    previousBackground: 'Coke Boyz',
    className: 'Excuse My French',
    favSubjects: ['Off the Rip', 'Stay Scheming']
})

const pmOne = new ProjectManager({
    name: 'Diddy',
    age: 50,
    location: 'New York City',
    gender: 'Male',
    specialty: 'Making Hits',
    favLanguage: 'Gangsta Talk',
    catchPhrase: 'Cant nobody hold me down',
    gradClassName: 'BadBoy',
    favInstructor: 'Christopher Wallace'
})

  
const pmTwo = new ProjectManager({
    name: 'Noreaga',
    age: 45,
    location: 'Iraq',
    gender: 'Male',
    specialty: 'Getting bloody money',
    favLanguage: 'Spanish',
    catchPhrase: 'What What'
})
  








console.log(instructorOne.speak());
console.log(instructorOne.demo('Stuff'));
console.log(instructorOne.grade(studentOne, 'Purple Reign'));
console.log(studentOne.speak());
console.log(studentTwo.listSubjects());
console.log(studentTwo.PRAssignment('Slanging Dope'));
console.log(studentOne.sprintChallenge('Going Platinum'));
console.log(pmTwo.standUp('channel'));
console.log(pmOne.grade(studentTwo, 'Flying'));
