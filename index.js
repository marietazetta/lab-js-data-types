/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let completeTongueTwister = '';

completeTongueTwister += s1;
completeTongueTwister += " " + s2;
completeTongueTwister += " " + s5;
completeTongueTwister += " " + s4;
completeTongueTwister += " " + s2;

// Print out the concatenated string

console.log(completeTongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1Formatted = part1.substring(0, part1.length - 1) + part1[part1.length - 1].toUpperCase()
console.log(part1Formatted)

const part2Formatted = part2.substring(0, part2.length - 1) + part2[part2.length - 1].toUpperCase()
console.log(part2Formatted)


// Print the cameLtaiL-formatted string

console.log(`${part1Formatted}${part2Formatted}`)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;


// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * 0.15

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


const randomNumber = (Math.floor(Math.random() * 10) + 1)


// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//FALSE
const expression2 = a || b;
//TRUE
const expression3 = !a && b;
//FALSE
const expression4 = !(a && b);
//TRUE
const expression5 = !a || !b;
//TRUE
const expression6 = !(a || b);
//FALSE
const expression7 = a && a;
//TRUE

console.log(expression1, expression2, expression3, expression4, expression5, expression6, expression7)