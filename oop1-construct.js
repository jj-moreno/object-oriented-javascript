//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    console.log(this.purpose);
  }
  pieces() {
    console.log(
      "The essential parts for building a class are the 'class' keyword, contructor method which instantiates properties, and any behavior that you may want to attach to your class in the form of functions."
    );
  }
}
const whyClassInstance = new WhyClass(
  'To model real world objects and allows for the implementation of the 4 OOP principles'
);
whyClassInstance.explain();
whyClassInstance.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

class AmazonMammal {
  constructor(name, speak, habitatHome) {
    this.name = name;
    this.speak = speak;
    this.habitatHome = habitatHome;
  }
  doSpeak() {
    console.log(`${this.name} speaks using ${this.speak}`);
  }
  inHabitatHome() {
    console.log(`${this.name} enjoys living in ${this.habitatHome}`);
  }
}

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  constructor(name, sides, radius) {
    this.name = name;
    this.sides = sides;
    this.base = sides[0];
    this.height = Math.sqrt(
      Math.pow(sides[1], 2) - Math.pow(0.5 * sides[0], 2) // height calculated for an isoseles triangle stated in triangle object literal
    ).toFixed(2);
    this.length = sides[0];
    this.width = sides[1];
    this.radius = radius;
  }

  calcAreaTriangle() {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  }
  calcPerimeterTriangle() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  }
  calcAreaRectangle() {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  }
  calcPerimeterRectangle() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  }
  calcAreaCircle() {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  }
  calcCircumferenceCircle() {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  }
}

const triangleShape = new Shape('triangle', [4, 7, 7]);
console.log(triangleShape);
triangleShape.calcAreaTriangle();
triangleShape.calcPerimeterTriangle();

const rectangleShape = new Shape('rectangle', [2, 5]);
console.log(rectangleShape);
rectangleShape.calcAreaRectangle();
rectangleShape.calcPerimeterRectangle();

const circleShape = new Shape('circle', 1, 5);
console.log(circleShape);
circleShape.calcAreaCircle();
circleShape.calcCircumferenceCircle();

const triangle = {
  name: 'triangle',
  sides: [4, 7, 7], //lengths of each side
  base: null,
  height: null, //determine this height using basic geometry.  You may need to research this one.
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  },
};

triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
  name: 'rectangle',
  sides: 4,
  length: 2,
  width: 5,
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  },
};

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
  name: 'circle',
  sides: 1,
  radius: 5,
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  },
  calcCircumference: function () {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  },
};

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth('earth', 3);
console.log(earth);
