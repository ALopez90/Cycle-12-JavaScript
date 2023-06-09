/**
 * Definitions to keep in mind:
 * 
 * initializer - the initial value to use against the condition.
 * condition - logic behind the reason why the loop begins/ends
 * iteration - adds on to the intial value to continue through the array
 */

/**
 * NOTE While Loops
 */
let int1 = 5; // initializer - starting value!

while (condition) {
    // run some code
    i++; // iteration - adds 1 to the current value
};

// Example: Print out a seq. of numbers
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
};
// Prints out: 0,1,2,4,5

/**
 * NOTE Do... While Loops
 * [Did not go over in class]
 * Another version of the while loop, however it checks the condition at the end of each loop instead of the beginning. Also, it will always loop the chunk of code once before checking the condition. If it's true, it will continue looping.
 */

// Syntax:
let l = 0; // initializer

do {
    // some code block
    l++; // iteration -- adds 1 to the current value
}
while (condition) //condition


// Example: Print out a range of numbers
// True/Success
let m = 1; // initializer

do {
    console.log("Something: " + m);

    m++; // iteration -- adds 1 to the current value
}
while (m <= 5); // condition

// False/Fails
let n = 6; // initializer

do {
    console.log("Number: " + n);

    n++; // iteration -- adds 1 to the current value
}
while (n <= 5); // condition

/**
 * NOTE For Loops
 */
for (intializer; condition; iteration) {
    // run some code
};

// Example: Print out a seq. of nubmers
for (let j = 0; j <= 5; j++) {
    console.log(j);
};
// Prints out: 0,1,2,4,5


// Looping through an array!
let musicGenres = [
    "Rap",
    "HipHop",
    "Drill",
    "Classical",
    "Country",
    "Techno Country",
    "Midwest Emo",
    "Metal",
    "Corridos",
    "Salsa"
];

// Example: Print out all of the genres in the list
// musicGenres.length - the number of values within the array
for (let k = 0; k < musicGenres.length; k++) {
    let genre = musicGenres[k];
    console.log(genre);
};

// Example: Print out ONLY the first 4 genres
for (let l = 0; l < 4; l++) {
    let genre = musicGenres[l];
    console.log(genre);
};

// Example: Print out Country, Techno Country, Midwest Emo
for (let z = 4; z < 7; z++) {
    let genre = musicGenres[z];
    console.log(genre);
};

// Example: Infinite Loop DO NOT RUN THIS
// Goes into the negatives forever (until stopped)
for (let smh = 5; smh < 6; smh--) {
    console.log(smh);
};