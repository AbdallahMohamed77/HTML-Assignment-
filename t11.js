const favfrutes = ["apple", "kiwi", "orange", "mango", "banana"];
console.log(favfrutes[0]);
console.log(favfrutes[favfrutes.length - 1]);

favfrutes.push("Grapes");
const index = favfrutes.indexOf("banana");
favfrutes.splice(index, 1);

console.log(favfrutes);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumbers = numbers.filter(num => num % 2 === 0);
console.log(evennumbers);

let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);

const max = Math.max(...numbers);
console.log(max);
const min = Math.min(...numbers);
console.log(min);

const student ={
    name: "Abdallah",
    age: 24,
    grade: "A",

    subjects: ["Math", "Physics", "Computer Science"],

    displayinfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Subjects: ${this.subjects.join(", ")}   `);
    }
}

student.displayinfo();

const books = [
  { title: "Book 1", author: "Author 1", year: 2015 },
  { title: "Book 2", author: "Author 2", year: 2010 },
  { title: "Book 3", author: "Author 3", year: 2020 },
];

const bookTitles = books.map(book => book.title);
console.log(bookTitles);

let oldbook = books[0];
books.forEach(book => {
  if (book.year < oldbook.year) {
    oldbook = book;
  }
});
console.log(oldbook);

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    return `${this.brand} ${this.model} (${this.year})`;
  }}
  const myCar1 = new Car("Toyota", "Camry", 2020);
  console.log(myCar1.displayDetails());
  const myCar2 = new Car("Honda", "Civic", 2018);
  console.log(myCar2.displayDetails());

class Bankaccount {
  constructor(ownername  , balance) {
    this.ownername = ownername;

    this.balance = balance;
  }
  deposit (amount) {
    this.balance += amount;
    }
    withdraw (amount) {     
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
        this.balance -= amount;
    }
}
    checkBalance() {
        return `Account owner: ${this.ownername}, Balance: ${this.balance}`;
    }
  } 

const account = new Bankaccount("Abdallah", 5000);
account.deposit(2000);
console.log(account.checkBalance());
account.withdraw(9000);
console.log(account.checkBalance());


class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        const book = { title, author };
        this.books.push(book);
    }
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    listbooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }

}
const library = new Library();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("1984", "George Orwell");
library.listbooks();

library.removeBook("To Kill a Mockingbird");
library.listbooks();
console.log(library.books);
