const favFruits = {
  apple: 10,
  orange: 20,
  mango: 0,
  banaana: 0,
};

for (let fruits in favFruits) {
  if (favFruits[fruits] === 0) console.log(fruits + " out of stock");
  else if (favFruits[fruits] > 0) console.log(fruits + " in stock");
}

const students = [
  { name: "Ahmed", grade: 95 },
  { name: "Sara", grade: 70 },
  { name: "Ali", grade: 50 },
];

students.forEach((students, index) => {
  if (students.grade >= 90) console.log("Excellent");
  else if (students.grade >= 60) {
    console.log("pass");
  } else {
    console.log("fail");
  }
});

const cart = [
  { name: "Laptob", price: 1000, quantity: 10 },
  { name: "Iphone", price: 3000, quantity: 7 },
  { name: "watch", price: 500, quantity: 4 },
];

let total = 0;
cart.forEach((item, index) => {
  total = total + item.price * item.quantity;
});

if (total > 3000) {
  total = total - total * 0.1;
}

console.log(total + " EGP");

let mostexpensive = cart[0];
cart.forEach((item) => {
  if (item.price > mostexpensive.price) {
    mostexpensive = item;
  }
});
console.log(mostexpensive);

let balance = 5000;
const pin = 1234;
let success = false;

for (let i = 0; i < 3; i++) {
  let userpin = Number(prompt("Enter Your PIN"));

  if (userpin === pin) {
    success = true;
    break;
  }
}

if (success === true) {
  let amount = Number(prompt("Amount to withdraw"));
  if (amount > balance) {
    alert("Insufficient funds");
  } else {
    alert(balance - amount);
  }
} else {
  alert("contact with the bank");
}

function calculateSum(a, b) {
  return a + b;
}
let result1 = calculateSum(4, 75);
let result2 = calculateSum(55, 5);
let result3 = calculateSum(12, 9);

console.log(result1);
console.log(result2);
console.log(result3);

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  details: function () {
    return "This is a " + this.brand + " " + this.model + " from " + this.year;
  },
};

console.log(car.brand);
console.log(car["model"]);
console.log(car.details());

class Book{
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} by ${this.author} published in ${this.year}`;
  }
}
const book1 = new Book("The Great Gatsby", "Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book1.getSummary()); 
console.log(book2.getSummary()); 