/**
 * DUE: Friday 12th at 1PM CST
 * Homework: Create a scenario! Imagine this...
 * You are in the Alice in Wonderland world and you are setting up the table for the tea party! There are 10 guests that will arrive soon. You need to make sure that every guest has a tea cup, tea plate, and a small dessert.
 */
// Example of a guest. Every guest must contain firstName, lastName, and species.
let guests = [{
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit"
}];

// Expected Output
{
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit",
    teaCup: true,
    teaPlate: true,
    smallDessert: "Carrot Cake"
};

// Challenge! Try to randomize the dessert to each guest and apply a color to the tea cup and tea plate
// You can ONLY use Math (JS), BUT if you are able to do it with ONLY what was taught today, $20 :) 
// !! First 3 people only. !!
{
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit",
    teaCup: true,
    teaCupColor: "Blue" //add
    teaPlate: true,
    teaPlateColor: "Light Blue", //add
    smallDessert: "Cheesecake" // randomize
};

// REVIEW SOLUTION (without the extra challenge)
let guests = [{
            firstName: "Sam",
            lastName: "Thing",
            species: "Rabbit"
        },
        {
            firstName: "Junior",
            lastName: "N/A",
            species: "Cat"
        },
        {
            firstName: "Stewart",
            lastName: "Big",
            species: "Mouse"
        },
        {
            firstName: "Jack",
            lastName: "Fast",
            species: "Squirrel"
        },
        {
            firstName: "DO NOT",
            lastName: "EAT ME",
            species: "Egg"
        },
        {
            firstName: "King",
            lastName: "Jest",
            species: "Lion"
        },
        {
            firstName: "Hubert",
            lastName: "Cole",
            species: "Giraffe"
        },
        {
            firstName: "Treat",
            lastName: "N/A",
            species: "Dog"
        },
        {
            firstName: "Knot",
            lastName: "Hugh-Man",
            species: "Horse (Human in disguise)"
        },
        {
            firstName: "Smokey",
            lastName: "Bear",
            species: "Bear"
        }
    ],
    desserts = [
        "Cheesecake",
        "Chocolate Cake",
        "Oatmeal Raisin Cookie",
        "Nothing",
        "Apple Pie"
    ],
    colors = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet"
    ];

for (let i = 0; i < guests.length; i++) {
    let guest = guests[i]; //Current guest in the loop

    // Add new key value pairs to each guest.
    guest.teaCup = true;
    guest.teaCupColor = colors[Math.floor(colors.length * Math.random())]; // Part of Challenge
    guest.teaPlate = true;
    guest.teaPlateColor = colors[Math.floor(colors.length * Math.random())]; // Part of Challenge
    guest.dessert = desserts[Math.floor(desserts.length * Math.random())]; // Part of Challenge
};

// Print out the updated list of guests
console.log(guests);