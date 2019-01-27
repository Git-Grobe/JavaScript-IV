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
    grade(subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge for ${subject}`
    }
}

class ProjectManagers extends Instructor{
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standup(channel) {
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(subject) {
        return `${name} debugs ${student.name}'s code on ${subject}!`
    }
}