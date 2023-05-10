/**
 * Introduction to JavaScript! An overview of the basics of JavaScript
 */
/**
 * Variables - change value throughout the script
 */
let str1 = "Hello World!",
    int1 = 23,
    obj1 = {
        firstName: "Alexa",
        lastName: "Lopez",
        age: 23,
        swe: true
    },
    arr1 = [1, 2, 3, 4],
    bool1 = true;

console.log(int1);
// Referencing a key in the object using dot notation
console.log(obj1.lastName);

// obj1 = {
//     petName.push = "BonBon"
// };

// obj1.push = {
//     petName: "BonBon"
// };

// obj1.push(job);

// Adding another key value pair to the object.
obj1.petName = "BonBon";

console.log(obj1);
console.log(obj1.petName);

// push.arr1(5);

// Add another value into the array
arr1.push(5);

console.log(arr1);

/**
 * Logic Statements - if, else if, else
 */
// If the number is greater than OR equal 7 AND less than 19, say "Hello World!". Otherwise, say "Goodbye!".

let int2 = 20,
    str2 = "Hello World!",
    str3 = "Goodbye",
    str4 = "How's it goin?",
    bool2 = false;

if (int2 >= 7 && int2 < 19) {
    console.log(str2);
} else {
    console.log(str3);
};

// If the number is greater than 16 OR the variable bool2 is FALSE, say "Hello World!". Else, if the number is less than 20 AND the variable bool2 is TRUE, say "How's it goin?". Otherwise, say "Goodbye!".
let int2 = 16,
    str2 = "Hello World!",
    str3 = "Goodbye",
    str4 = "How's it goin?",
    bool2 = true;

if (int2 > 16 || bool2 == false) {
    console.log(str2);
} else if (int2 < 20 && bool2 == true) {
    console.log(str4);
} else {
    console.log(str3);
};

/**
 * Difference between == and ===
 * == is considered "Loose comparison". Meaning, it'll ONLY check for the value
 * === is considered "Strict comparison". Meaning it'll check for BOTH the value and datatype
 */
let bool3 = "true";

if (bool3 === "true") {
    console.log("pass!");
} else if (bool3 == true) {
    console.log("pass #2");
} else {
    console.log("FAIL");
};