// const square = (x) => {
//     return x * x;
// };

// console.log(square(9));

// const squareArrow = (x) => x * x;
// console.log(squareArrow(5));

// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName('Mike Smith'));

//arguments object - no longer bound with arrow functions 
const add = function (a, b) { //can't use arrow function here
    return a + b;
};
console.log(add(5, 6));

//this keyword - no longer bound
const user = {
    name: 'Andrew',
    cities: ['Kent', 'Philly', 'Texas'],
    printPlaces() { //es6 function
        //const that = this;  //call this in the nested function
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
};
console.log(user.printPlaces());

//challenge area
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply(5));
