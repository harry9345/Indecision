// car class
// make 
// model
// VIN number
// getDescription
class Person {
    constructor(name ="Anonymous",age=0){
        this.name=name;
        this.age=age;
    }
   
    getGreting() {
        return `hi i am ${this.name}.`
    }
    getDescription(){
        return `hi im ${this.name} and im ${this.age} years old.`
    }

};

class Student extends Person {
 constructor(name,age,major){
     super(name,age);
     this.major=major;
 }
 hasMajor(){
     return !!this.major;
 };
 getDescription(){
     let description= super.getDescription();
     if(this.hasMajor()){
         description += ` is studing ${this.major}`
     }
     return description;
 };
};

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    getGreting(){
        let greeting= super.getGreting();
        if (this.location){
            greeting += ` i am visiting from ${this.location}.`
        }
        return greeting
    }
};

const me = new Traveller("Harry",25,"tehran");
console.log(me.getGreting());

const other = new Traveller();
console.log(other.getGreting());