// build a prompt that asks the user what froyo flavors they want

let flavors = prompt('What froyo flavors would you like? Seperate flavors with commas and NO SPACES')
console.log(flavors);

// sprit the single string response into an array of strings

let individualFlavors = flavors.split(',')
console.log(individualFlavors);

// create an object for flavors and number of those flavors

let order = {};

for (let flavor of individualFlavors) {
    flavor in order ? order[flavor] = order[flavor] + 1  : order[flavor] = 1;
}

console.table(order);


// build a loop that counts how many of each flavor there are and adds them to the object as a value

// object should return all the individual flavors added as keys in the object and the number of each of those flavors as values in the object
