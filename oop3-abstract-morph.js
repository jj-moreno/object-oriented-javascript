/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error('This an abstract class. No instantiation allowed.');
    }
  }
  move() {
    throw new Error('This is an abstract method so not allowed to be invoked');
  }
  act() {
    throw new Error('This is an abstract method so not allowed to be invoked');
  }
}

class Human extends Creature {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  move() {
    console.log('Moving by walk or ride');
  }
  act() {
    console.log('On land with family');
  }
  climb() {
    console.log('reaching a new height');
  }
}

class Fish extends Creature {
  constructor(type, weight) {
    this.type = type;
    this.weight = weight;
  }
  move() {
    console.log('Moving by swim');
  }
  act() {
    console.log('In stream of water with family');
  }

  spawn() {
    console.log('reproduce in water');
  }
}

class Bird extends Creature {
  constructor(color, size) {
    this.color = color;
    this.size = size;
  }
  move() {
    console.log('moving by fly');
  }
  act() {
    console.log('In a high structure with family');
  }
  flap() {
    console.log('moving my wings');
  }
}

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + ' is eating');
  }

  sleep() {
    console.log(this.name + ' is sleeping');
  }

  code() {
    console.log(this.name + ' is coding');
  }

  repeat() {
    console.log(this.name + ' is repeating the above steps, yet another time');
  }

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      'I changed the syntax of eat(), sleep(), code() and repeat() from function expressions to the syntax of function declarations which moved these functions from own property as class fields into the prototype section as class methods. The polymorphism order taught in class explains that JavaScript will first check the fields of an object instance then the fields of parent as the next step. If the child class uses only function declarations, then as a consequence the class has no fields in its own instance. After this occurence, JS will look for the invoking function in the fields of the parent class as the 2nd step in the polymorphism order. The last two steps, 3 and 4, are 3. Check the protoype of the Child and 4. Check the protoype of the Parent'
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + ' loves to teach before eating');
  }

  sleep() {
    console.log(this.name + ' sleeps after preparing the lesson plan');
  }

  code() {
    // I only had to change this function because it wasn't a method it was a field using arrow function syntax. Now it is in the normal class method syntax just like the other 3 methods were originally. I believe this is the correct solution for method overriding. If I were to change the methods in this class into function expressions, they will no longer be class methods as they will now be considered class fields.
    console.log(this.name + ' codes first, then teaches it the next day.');
  }

  repeat() {
    console.log(this.name + ' teaches, codes, eats, sleeps, and repeats');
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.name = name;
  }
  //set up your methods in this student class, so all of these methods will override the methods from the super class.

  //eat method should print out - <stduent name> studies, then eats
  eat() {
    console.log(`${this.name} studies, then eats`);
  }
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  sleep() {
    console.log(
      `${this.name} studies coding so much, that they dream about it in their sleep`
    );
  }
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  code() {
    console.log(
      `${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`
    );
  }
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
  repeat() {
    console.log(
      `${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`
    );
  }
}

const teacher = new Teacher('Dr. Teacher');
console.log(teacher);

teacher.explain();

const student = new Student('Pupil Student');

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare() {
    console.log('The cook is cooking');
  }
  prepare(food1, food2, food3) {
    console.log('The cook is cooking ' + food1, food2, food3);
  }

  explain = () => {
    console.log(
      'I changed the prepare() with no arguments into a function declaration and moved it to the top of the Cook class. The prepare method with 3 arguments (food1, food2, food3) is now below prepare() with no arguments and this will allow it to be executed first.'
    );
  };
}

const cook = new Cook();

cook.prepare('turkey', 'salami', 'pizza');

cook.explain();
