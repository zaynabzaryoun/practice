// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model
//         this.year = year
//     }
//     getDetails() {
//         return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
        
//     }
// }

// const car1 = new Car("Toyota", "Corolla", 2020)
// console.log(car1.getDetails());


// class Book{
//     constructor(title, author, year, isRead=false) {
//         this.title = title
//         this.author = author
//         this.year = year
//         this.isRead = isRead
//     }

//     toggleReadStatus() {
//         this.isRead = !this.isRead
//     }

//     getBookInfo() {
//         return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Read: ${this.isRead===true? "Yes" : "No"}`
//     }
// }

// const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
// console.log(book1.getBookInfo());
// book1.toggleReadStatus()
// console.log(book1.getBookInfo());

// const person = {
//     myName: "ali",
//     greet() {
//         console.log("hello");
        
//     }
// }

// const john = Object.create(person)
// console.log(person);
// console.log(john.myName);
// console.log(john.__proto__);


// class Player{

// }

// const player1 = new Player
// console.log(player1);
// console.log({});


// class Squar{
//     constructor(_width) {
//         this.width = _width
//         this.height = _width
//         this.numOfRequestForArea = 0
//     }


//     get area() {
//         this.numOfRequestForArea++
//         return this.width * this.height
//     }

//     set area(area) {
//         this.width = Math.sqrt(area)
//         this.height = this.width
//     }
// }

// let squar1 = new Squar(4)

// console.log(squar1.area);

// squar1.area = 25
// console.log(squar1.area);
// console.log(squar1.width);
// console.log(squar1.height);
// console.log(squar1.area);
// console.log(squar1.numOfRequestForArea);


// class Temperature{
//     constructor(celsius) {
//         this.celsius = celsius
//         console.log(this);
//     }
//     get farenheit() {
//         return this.celsius * 9/5 + 32
//     }
    
//     set farenheit(farentheitValue) {
//         this.celsius = (farentheitValue - 32) * 5/9
//     }
// }


// const temp = new Temperature(25)
// console.log(temp);

// console.log(temp.farenheit)
// temp.farenheit = 100
// console.log(temp.celsius);




// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     get area() {
//         return `the area of the rectangle is ${this.width * this.height}`
//     }

//     set area(userArea) {
//         this.width = userArea / this.height
//     }
// }

// let rect = new Rectangle(5, 10)

// console.log(rect.area);

// rect.area = 100
// console.log(rect.area);
// console.log(rect.width);
// console.log(rect.height);

// class Rectangle{
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//         this._area = this.width * this.height
//     }

//     get area() {
//         return this._area
//     }

//     set area(userArea) {
//         this._area = userArea
//     }
// }

// let rect2 = new Rectangle(2, 4)
// console.log(rect2.area);
// rect2.area = 100
// console.log(rect2.area);



// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//         this.numOfRequestForArea = 0;
//     }

//     // Getter for area
//     get area() {
//         this.numOfRequestForArea++;
//         return this.width * this.height;
//     }

//     // Setter for area
//     set area(area) {
//         this.width = Math.sqrt(area);
//         this.height = this.width;
//     }

//     // Static method
//     static isSquare(width, height) {
//         return this.width === this.height
//     }
// }

// const squar1 = new Square(5)
// console.log(squar1.area);

// // console.log(Square.isSquar(4, 5));
// console.log(Square.isSquare(4, 4)); // Output: true
// console.log(Square.isSquare(4, 5));





