// Fubction declaration
function goodBye(name) {
    return "bye bye " + name + '!';
}
console.log(goodBye("alex"));

// function expression
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 3));

// arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const minus = (a, b) => a - b;
console.log(minus(2, 5));

const divide = function(a, b) {
    return a / b;
}
console.log(divide(9, 3));