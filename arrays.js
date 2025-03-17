// mixed Array with Name, Age, subscription status, location, hobbies

let mixedArray = ["Bob", 35, false, {city: "Houston"}, ["gaming", "cooking", "cleaning"]];


// display user name and second hobby

console.log(mixedArray[0]);
console.log(mixedArray[4][1]);

// update age in array and add a new hobby using .push

mixedArray.fill("Chuck", 0, 1);

mixedArray[4].push("eating");



// log updated array

console.log(mixedArray);
