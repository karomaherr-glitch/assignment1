//part 1
//1-convert string to number
function strToNum(str) {
    return Number(str) + 7;
}
let result = strToNum("123");
console.log(result);

// =========================================================

//2-check falsy value
function checkValue(value) {
    if (!value) {
        return ("invalid");
    }
    return value;
}
console.log(checkValue(0));
console.log(checkValue(10));
console.log(checkValue(false));

// =========================================================

//3-contiune--odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);

}

// =========================================================

//4-even numbers
function evenNumber(arr) {
    return arr.filter(num => num % 2 == 0);
}
let even = evenNumber([1, 2, 3, 4, 5])
console.log({ even });

// // =========================================================

//5-concat two array
function arrays(arr1, arr2) {
    return [...arr1, ...arr2]
}
console.log(arrays([1, 2, 3], [4, 5, 6]));

// // =========================================================

//6-days of week
function getDay(num) {

    switch (num) {
        case 1:
            console.log("sunday");

            break;
        case 2:
            console.log("monday");

            break;
        case 3:
            console.log("tuseday");

            break;
        case 4:
            console.log("wednesday");

            break;
        case 5:
            console.log("thursday");

            break;
        case 6:
            console.log("friday");

            break;
        case 7:
            console.log("saturday");

            break;

        default:
            console.log("invalid choice");

    }

}
getDay(2);
getDay(9);

// // =========================================================

//7-length of array
function arrlength(array) {
    let length = array.map(string => string.length)
    return length;
}
console.log(arrlength(["a", "abc", "ab"]));

// // =========================================================

//8-divisible by 3 and 5 
function checkNum(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "divisible by both"
    }
    //  if (num % 3 == 0 )
    //      {
    //     return"divisible by 3 only"
    // }
    //  if (num % 5 == 0 )
    //      {
    //     return"divisible by 5 only"
    // }
    else
        return "not divisible by both"
}
console.log(checkNum(15));
console.log(checkNum(3));

// // =========================================================

//9- square num with arrow function
let square = num => num * num;
console.log(square(5));

// // =========================================================

//10-destructing 
function personInfo() {
    const { name, age } = person;
    return `${name} is ${age} years old `
} const person = {
    name: "karo",
    age: 24
}
console.log(personInfo(person));

// // =========================================================

//11-sum
function sum(...numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s;
}
console.log(sum(1, 2, 3, 45, 6))

// // =========================================================

//12.promise
function promise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("success")
        }, 3000);
    });
}
promise().then(result => {
    console.log(result);
}
);

// // =========================================================

//13.max Number in the array
function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        }

    }
    return max;
}
let array = [2, 6, 9, 4, 8, 2, 6, 1000000000000, 1, 0]
console.log(findMax(array));

// // =========================================================

//14-key of an object
function findKey(obj){
    return Object.keys(obj);
}
const object={
    name:"karo",
    age:20
};
console.log(findKey(object));

// // =========================================================

//15- splits words
function words(str){
return str.split(" ");
}
let sentence="My Name Is Karolin";
console.log(words(sentence));

 // ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
 
//B. Part 2: Essay Questions

// Q1. What is the difference between forEach and for...of? When would you use each?

// forEach is used to loop through array elements and execute a function for each element

// for...of is used to loop through iterable values like arrays and strings.

// I use forEach :
//  when I want to do something with every element,
//  and I use for...of :
//  when I need more control over the loop, like using break or continue

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// Q2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

// Hoisting means that JavaScript prepares variable declarations before running the code.

// For example:           //what javaScript do
// console.log(x);       //var x;
// var x = 10;          //console.log(x);
                       //    x=10
// Output: undefined

// TDZ (Temporal Dead Zone)
//  is the time before declaring a let or const variable.
//  We cannot use the variable before its declaration.

// example:           //what javaScript do
// console.log(x);      TDZ 
// let x = 10;          

// Output: ReferenceError

// var-----> undefined
// let-----> ReferenceError
// const----->ReferenceError

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️


// Q3. What's the difference between == and ===?

// == (loose equality)
// compares two values and converts their types if needed.

// === (strict equality)
// compares both value and data type without converting the type.
// Triple equal checks both value and type, but double equal may convert the type before comparing .

// Example:
// console.log(5 == "5"); 
// // true

// console.log(5 === "5"); 
// // false

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// Q4. Explain how try-catch works and why it is important in async operations.
// Imagine you have code that may cause an error.
// Try-catch is used to handle errors in JavaScript
// instead of letting the program stop unexpectedly.

// (try): contains the code that may cause an error.
// (catch): handles the error if it happens.
// If the Promise is rejected, while using await inside try, catch handles the error
// (async): makes a function asynchronous.
// (await): waits for the result of an operation.

// It is important in async operations because if the operation fails,
// we can handle the error instead of leaving the program without error handling.

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// Q5. What's the difference between type conversion and coercion? Provide examples of each.

//Type Conversion: It means changing the data type manually using functions
//like---> Number(), String(), or Boolean()
// Programmer does it
// Example:
// let x = "123";
// let y = Number(x);

// console.log(y); // 123   //Explicit Conversion


//Type Coercion: It means JavaScript changes the data type automatically during an operation.
// JavaScript does it
// Example:
// let x = "5";
// let y = 2;          
// console.log(x + y); // "52"    //implicit Conversion

// The main difference is that type conversion is done manually by the programmer.
// while type coercion happens automatically by JavaScript.

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
