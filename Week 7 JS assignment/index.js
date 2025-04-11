var ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log( ages[ages.length - 1] - ages[0]);

ages.splice(0, 0, 5);

console.log( ages[ages.length - 1] - ages[0]);
var sumAge = 0;

for (i = 0; i < ages.length; i++) {
    sumAge += ages[i];
    
};
console.log("The average age is: " + (sumAge / ages.length));


var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var sumName = 0;
var nameConcat = "";
for (i = 0; i < names.length; i++) {
    sumName += names[i].length;
    nameConcat += names[i] + " ";
}; console.log("The average letters in each name: " + sumName / names.length);
console.log("The concatinated string of names is: " + nameConcat);

//How do you access the last element in an array?: Array[array.length - 1], because 0 is included in the length of an array, the last element will always be in the length of the array - 1 space

//How do you access the first element in an array?: Array[0], because 0 is the starting position of any array


var nameLengths = [];

for (i = 0; i < names.length; i++) {
    nameLengths.splice(0, 0, names[i].length);
} console.log(nameLengths);

var nameLengthsSum = 0;

for (i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
} console.log("The average length of names is: " + (nameLengthsSum / nameLengths.length));


var word = "Hello";
var n = 2;

let concatTimes = (word, n) => {
    let concatWord = "";
    for (i = 0; i < n; i++) {
        concatWord += word;
    };
    return console.log(concatWord);
}; 

concatTimes(word, n);

var firstName = "Khaleb";
var lastName = "Denham";
let fullName = (firstName, lastName) => {
    let concatName = firstName + " " + lastName;
    console.log(concatName);
};

fullName(firstName, lastName);

let numbers = [50, 50]; 

let largerThanHund = (numbers) => {
    let sum = 0;
    for(i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } 
    if (sum > 100) {
        console.log(true);
    } else {
       console.log(false);
    }
} 

largerThanHund(numbers);


let arrayOne = [1, 2, 3, 4, 5];
let averageOfArray = (arrayOne) => {
    let sum = 0;
    for (i = 0; i < arrayOne.length; i++) {
        sum += arrayOne[i]
    } 
    console.log("The average of all elements in the arrray is: " + (sum / arrayOne.length));
} 

averageOfArray(arrayOne);

let arrayTwo = [1, 2, 4, 5, 6];

let compareArray = (arrayOne, arrayTwo) => {
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < arrayOne.length; i++) {
        sum1 += arrayOne[i];
    } 
    for (i = 0; i < arrayTwo.length; i++) {
        sum2 += arrayTwo[i];
    }
    if ((sum1 / arrayOne.length) > (sum2 / arrayTwo.length)) {
        console.log(true);
    } else {
        console.log(false);
    }
    
} 
compareArray(arrayOne, arrayTwo);

let isHotOutside = true;
let moneyInPocket = 10.55;
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        console.log(true);
    } else {
        console.log(false);
    }
}

willBuyDrink(isHotOutside, moneyInPocket);


let areBillsPaid = true;
let moneyInWallet = 65;
let wifeHappy = true;

let canIGetGame = (areBillsPaid, moneyInWallet, wifeHappy) => {
    if (areBillsPaid == true && moneyInWallet > 60 && wifeHappy == true) {
        console.log("Congrats buddy, enjoy your game!");
    } else {
        console.log("Not today, jr");
    } 
} 

canIGetGame(areBillsPaid, moneyInWallet, wifeHappy);