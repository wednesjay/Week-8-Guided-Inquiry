//  Very Easy

function min (x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(min(3, 44));
// 3
console.log(min(10, -4));
// -4


// Easy
// const john = [`Doe`, `John`, `24`]
// const jay = [`Garnes`, `Jay`, `22`];
// const jane = [`Doe`, `Jane`, `19`]

const students = [
    `Garnes`, `Jay`, `22`,
    `Doe`, `Jane`, `19`,
    `Doe`, `John`, `24`
]

// const students = [john, jay, jane];

console.log(`Hello! My name ${students[4]} ${students[3]} is and I am ${students[5]} years old.`);


// Medium

let input = prompt(`Hello, ${name}! Please enter the number that corresponds with the current month! (1-12)`);


function monthMatcher (input) {
    if (input >= 1 && input <= 12 && input != null) {
        if (input = 1 && input != null) {
            console.log(`January`)
        } else if (input = 2) {
            console.log(`February`)
        } else if (input = 3) {
            console.log(`March`)
        } else if (input = 4) {
            console.log(`April`)
        } else if (input = 5) {
            console.log(`May`)
        } else if (input = 6) {
            console.log(`June`)
        } else if (input = 7) {
            console.log(`July`)
        } else if (input = 8) {
            console.log(`August`)
        } else if (input = 9) {
            console.log(`September`)
        } else if (input = 10) {
            console.log(`October`)
        } else if (input = 11) {
            console.log(`November`)
        } else if (input = 12) {
            console.log(`December`)
        }
    } else {
        alert(`That is not an accepted number`);
    }
}

monthMatcher(input);

// Hard

const tomMass = 8
const tomHeight = 9

const jerryMass = 45
const jerryHeight = 10

const tomBMI = tomMass / tomHeight ** 2;
const jerryBMI = jerryMass / jerryHeight ** 2;

console.log(tomBMI, jerryBMI);

const higherBMI = tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`);