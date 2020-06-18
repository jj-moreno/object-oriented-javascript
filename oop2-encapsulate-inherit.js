/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 
*/

class Book {
  #name;
  #author;
  #publisher;
  constructor(name, author, publisher) {
    this.#name = name;
    this.#author = author;
    this.#publisher = publisher;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get author() {
    return this.#author;
  }

  set author(newAuthor) {
    this.#author = newAuthor;
  }

  get publisher() {
    return this.#publisher;
  }

  set publisher(newPublisher) {
    this.#publisher = newPublisher;
  }
}

class Author {
  #name;
  #books;
  constructor(name, books) {
    this.#name = name;
    this.#books = books;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get books() {
    return this.#books;
  }

  set books(newBooks) {
    this.#books.push(newBooks);
  }
}

class Publisher {
  #name;
  #authors;
  #books;
  constructor(name, authors, books) {
    this.#name = name;
    this.#authors = authors;
    this.#books = books;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get authors() {
    return this.#authors;
  }

  set authors(newAuthors) {
    this.#authors.push(newAuthors);
  }

  get books() {
    return this.#books;
  }

  set books(newBooks) {
    this.#books.push(newBooks);
  }
}

class Review {
  #rating;
  #user;

  constructor(rating, user) {
    this.#rating = rating;
    this.#user = user;
  }

  get rating() {
    return this.#rating;
  }

  set rating(newRating) {
    this.#rating = newRating;
  }

  get user() {
    return this.#user;
  }

  set user(newUser) {
    this.#user = newUser;
  }
}

/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/

class Umbrella {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const allegisGroup = new Umbrella('Allegis Group');

class Company extends Umbrella {
  #name;
  #numOfEmployees;
  #type;
  #field;

  constructor(name, numOfEmployees, umbrellaName) {
    super(umbrellaName);
    this.#name = name;
    this.#numOfEmployees = numOfEmployees;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get numOfEmployees() {
    return this.#numOfEmployees;
  }

  set numOfEmployees(numOfEmployees) {
    this.#numOfEmployees = numOfEmployees;
  }

  get umbrellaName() {
    return super.name;
  }

  hireEmployee() {
    this.#numOfEmployees++;
    console.log(`${this.#name} has hired an employee`);
  }
  changeLogo() {
    console.log(`${this.name} has changed their logo`);
  }
}

const teksystems = new Company('Teksystems', 80000, allegisGroup.name);
console.log(`Company: ${teksystems.name}, Number of Employees: ${teksystems.numOfEmployees}
Umbrella: ${teksystems.umbrellaName}`);
const aerotek = new Company('Aerotek', 80000, allegisGroup.name);
const tekcamp = new Company('Tekcamp', 40000, allegisGroup.name);

class Site extends Company {
  #location;
  #departments;
  #region;

  constructor(name, location, numOfEmployees, umbrellaName) {
    super(name, numOfEmployees, umbrellaName);
    this.#location = location;
  }

  get location() {
    return this.#location;
  }

  set location(location) {
    this.#location = location;
  }

  allowAccess() {
    console.log(`${this.name} ${this.#location} is now allowing access`);
  }
  denyAccess() {
    console.log(`${this.name} ${this.#location} is now denying access`);
  }
}

const dallasTeksystems = new Site(
  'Teksystems',
  'Dallas',
  teksystems.numOfEmployees,
  teksystems.umbrellaName
);
console.log(`Site: ${dallasTeksystems.name} ${dallasTeksystems.location}
Company: ${dallasTeksystems.name}, Number of Employees: ${dallasTeksystems.numOfEmployees}
Umbrella: ${dallasTeksystems.umbrellaName}`);

const newYorkTeksystems = new Site(
  'Teksystems',
  'New York',
  teksystems.numOfEmployees,
  teksystems.umbrellaName
);
const hqTeksystems = new Site(
  'Teksystems',
  'HQ',
  teksystems.numOfEmployees,
  teksystems.umbrellaName
);

const dallasAerotek = new Site(
  'Aerotek',
  'Dallas',
  aerotek.numOfEmployees,
  aerotek.umbrellaName
);
const newYorkAerotek = new Site(
  'Aerotek',
  'New York',
  aerotek.numOfEmployees,
  aerotek.umbrellaName
);
const bostonAerotek = new Site(
  'Aerotek',
  'Boston',
  aerotek.numOfEmployees,
  aerotek.umbrellaName
);

const dallasTekcamp = new Site(
  'Tekcamp',
  'Dallas',
  tekcamp.numOfEmployees,
  tekcamp.umbrellaName
);
const newYorkTekcamp = new Site(
  'Tekcamp',
  'New York',
  tekcamp.numOfEmployees,
  tekcamp.umbrellaName
);
const bostonTekcamp = new Site(
  'Tekcamp',
  'Boston',
  tekcamp.numOfEmployees,
  tekcamp.umbrellaName
);

class Employee {
  #name;
  #job;
  #salary;
  #ssn;
  #email;
  constructor(name, job, salary) {
    this.#name = name;
    this.#job = job;
    this.#salary = salary;
  }
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get job() {
    return this.#job;
  }

  set job(job) {
    this.#job = job;
  }

  get salary() {
    return this.#salary;
  }

  set salary(salary) {
    this.#salary = salary;
  }

  checkEmail() {
    console.log(`${this.#name} is checking email`);
  }
  joinMeeting() {
    console.log(`${this.#name} has joined meeting`);
  }
}

//Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.
const jay = new Employee('Jay', 'CEO', 1000000);
console.log(`Employee: ${jay.name}, Job: ${jay.job}, Salary: ${jay.salary}`);
const betty = new Employee('Betty', 'Manager', 200000);
const julian = new Employee('Julian', 'Secretary', 50000);
const deborah = new Employee('Deborah', 'Engineer', 100000);
const nancy = new Employee('Nancy', 'Engineer', 100000);
const norita = new Employee('Norita', 'Financial Officer', 150000);
const bob = new Employee('Bob', 'Janitor', 50000);
const dylan = new Employee('Dylan', 'Marketer', 60000);
const bill = new Employee('Bill', 'HR Personnel', 80000);
const mary = new Employee('Mary', 'Lawyer', 140000);

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

class Bookstore {
  #books;

  constructor(books) {
    this.#books = books;
  }

  get books() {
    return this.#books;
  }

  set books(newBooksWithReview) {
    this.#books.push(newBooksWithReview);
  }
}

const suzanneCollins = new Author('Suzanne Collins', []);
const scholasticPress = new Publisher('Scholastic Press', [], []);
const hungerGames = new Book(
  'The Hunger Games',
  suzanneCollins,
  scholasticPress
);
suzanneCollins.books = hungerGames;
scholasticPress.authors = suzanneCollins;
scholasticPress.books = hungerGames;

const myBookStore = new Bookstore([]);

const hungerGamesReview1 = new Review(5, 'Joe');
const hungerGamesReview2 = new Review(4, 'Andy');
const hungerGamesReviews = [hungerGamesReview1, hungerGamesReview2];

myBookStore.books = {
  'The Hunger Games': hungerGames,
  'The Hunger Games Reviews': [...hungerGamesReviews],
};

const hungerGamesReview3 = new Review(4, 'Caroll');

myBookStore.books[0]['The Hunger Games Reviews'] = [
  ...myBookStore.books[0]['The Hunger Games Reviews'],
  hungerGamesReview3,
];
const catchingFire = new Book('Catching Fire', suzanneCollins, scholasticPress);
suzanneCollins.books = catchingFire;
scholasticPress.books = catchingFire;

myBookStore.books = {
  'Catching Fire': catchingFire,
  'Catching Fire Reviews': [],
};

const catchingFiresReview1 = new Review(5, 'Jonas');

myBookStore.books[1]['Catching Fire Reviews'] = [
  ...myBookStore.books[1]['Catching Fire Reviews'],
  catchingFiresReview1,
];

const ryderWindham = new Author('Ryder Wyndam', []);
const starWarsRiseFallDarthVader = new Book(
  'Star Wars The Rise and Fall of Darth Vader',
  ryderWindham,
  scholasticPress
);
ryderWindham.books = starWarsRiseFallDarthVader;
scholasticPress.authors = ryderWindham;
scholasticPress.books = starWarsRiseFallDarthVader;

myBookStore.books = {
  'Star Wars The Rise and Fall of Darth Vader': starWarsRiseFallDarthVader,
  Reviews: [],
};

const starWarsRFDVReviews1 = new Review(4, 'Jake');
myBookStore.books[2]['Reviews'] = [
  ...myBookStore.books[2]['Reviews'],
  starWarsRFDVReviews1,
];
console.log(myBookStore);
