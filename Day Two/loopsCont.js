/**
 * REVIEW!
 * For Loop Example
 * Print out a range of numbers going from 0-10
 */
for (let i = 0; i < 11; i++) {
    console.log(i);
};

/**
 * For... Of Loops
 * Loops that you can use with strings and arrays. DOES NOT work with objects.
 */
// Format:
let str1 = "Hello World!"; //initializer

for (let char of str1) { // condition & iteration
    // code
};

// Example: Print out every letter in the string
let str2 = "Goodbye World!";

for (let letter of str2) {
    console.log(letter);
};

// Example: Print out every element within an array
let arr1 = [
    "Dog",
    "Cat",
    "Crab",
    // Uncomment to test loops below
    // 1, //Integer within the array
    // {
    //     example: "Name",
    //     number: 2
    // }, //Object within the array
    "Turtle",
    "Koala",
    "Sloth",
    "Whale",
    "Spider",
    "Snake",
    "Fish"
];

for (let pet of arr1) {
    // NOTE No matter the datatype, it will print out because it is inside an array
    console.log(pet);
};

// Example: Print out every character to every element within an array
for (let pet of arr1) {
    for (let char of pet) {
        // Will print out every character for the current "pet" element in the loop
        // NOTE Will error out if there's an element within the array that is ANYTHING besides a string. Reason because you can ONLY use a "For... Of" loop directly with a string or an array
        console.log(char);
    };
};

// Example: Create an object with the array
let arr2 = []; //Empty array to eventually get all of the objects we create
for (let pet of arr1) {
    let obj1 = {}; //Create an empty object

    obj1[pet] = "Dog"; //Create the key value pair inside the object
    arr3.push(obj1); // Add new object into the empty array outside of the loop
};
console.log(arr2);

/**
 * For... In Loops
 * Used for objects. DO NOT USE WITH ARRAYS IF THE INDEXING IS IMPORTANT! It ignores index specific order
 */
// Format:
let object = {
    firstName: "Alexa",
    lastName: "Lopez"
}; //initialize
for (let prop in object) { //condition & iteration
    // code
};

// Example: Print out every property within an object
let obj2 = {
    petName: "BonBon",
    species: "Crusty White Dog",
    age: 17
};

// Get key
for (let key in obj2) {
    console.log(key);
};

// Get value
for (let val in obj2) {
    // Using square brackets with an object will get the value of the defined variable within the square brackets
    // obj2[val] = obj2[petName] = "BonBon"
    // obj2[val] = obj2[species] = "Crusty White Dog"
    // etc.
    console.log(obj2[val]);
};