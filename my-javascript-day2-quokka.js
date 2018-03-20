// if statements
//Test

//UNCOMMENT SYNTACTICALLY CORRECT ANSWERS
if (7 > 3) { }
if (7 > 3) { }
// if{7 > 3} ( )
if(3 > 7) console.log('hello') // you can do a single line if statement and dont need curly braces
if (3 > 7) 
console.log('hello')
if (7 < 3) { }
if (7 = 3) { } //this is doing an assignment
if (7 == 3) { }
if (7 === 3) { }
if (7 != 3) { }
if (7 !== 3) { }
//if(7 =! 3) { }
//if(7 ==! 3) { }
// if(7 ~ 3) { }
if (7 >= 3) { }
if (7 <= 3) { }
// if(7 => 3) { }
// if(7 =< 3) { }
if (7 + +"3") { }
// if (7 ++ "3") { }
if (7 - 3) { }
if (7 / 3) { }

let val = 7 + +"3";
val;

//TRUTHY VS FALSEY
// True or false
// I am human?
// I am giraffe?
// I am 7
// 7
// Depends on who you ask.  Computers do true false differently.
// The following 6 values are false :
// 0
// "" / ''
// false
// null
// undefined
// NaN

//UNCOMMENT the sections that will return true
//if(3) { return true }
//if(0) { return true }
//if(-7) { return true }
//if("Hello") { return true }
//if("") { return true }
//if("   ") { return true }
//if(undefined) { return true }
//if(nonExistantObject) { return true }


// - if else if
// WHAT WILL BE THE FINAL OUTPUT?

var num = 7
var finalOutput = ""
if (num > 3) {
    finalOutput = "Yes"
} else {
    finalOutput = "No"
}
//finalOutput = "Yes"

var num = 7
var finalOutput = ""
if (num > 33) {
    finalOutput = "Yes"
} else {
    finalOutput = "No"
}
//finalOutput = "No"

var num = 7
var finalOutput = ""
if (num > 3 && num < 7) {
    finalOutput = "Yes"
} else if (num > 7 && num < 11) {
    finalOutput = "Maybe"
} else {
    finalOutput = "No"
}
// finalOutput = "No"

var num = 7
var finalOutput = ""
if (num > 3 && num < 7) {
    finalOutput = "Yes"
} else if (num >= 7 && num < 11) {
    finalOutput = "Maybe"
} else {
    finalOutput = "No"
}
//maybe

var num = 7
var finalOutput = ""
if (num > 3 && num < 7) {
    finalOutput = "Yes"
} else if (num > 7 && num < 11) {
    finalOutput = "Maybe"
} else {
    finalOutput = "No"
}
// no


// Logical expressions
// IS THIS LOGICALLY SOUND?
var person = {
    name: "Long John Silvers",
    beard: true,
    canTan: true,
    melts: false,
    isAllergicToSnow: true,
}
// if(person.name=="Long John Silvers" && person.beard == true){ 
//     person.isPirate = true
// }

// if(person.name !== "Long John Silvers") {
//     person.isPirate = false
// }

// if(person.canTan && !person.melts && person.isAllergicToSnow){
//     person.isPhoenixNative = true;
// }

// if( (person.isExtrovert && day.endsInDay)){
//     person.wantsToHangOut = true
// } else if(person.isExtrovert){
//     person.wantsToHangOut = true;
// } else if(person.isIntrovert 
//   && goodWeather 
//   && doesntHaveToDriveFar
//   && hasBeenMoreThan3DaysSinceHangingOut
//   || hasBeenLongerThan1Month){
//     return true;
// }



// * ternary operator

var sizing = 7 < 10 ? "less than" : "greater than";
// // if(7<10){
//     sizing = "less than";
// } else {
//     sizing = "greater than";
// }
var sizing2 = 7 > 10 ? "valid statement" : "invalid statement"
// // if(7<10){
//     sizing2 = "valid statement";
// } else {
//     sizing2 = "invalid statement";
// }

function flow1() {
    var abc = 123;
    abc;
}

function flow2() {
    var abc = 123;
    abc;
}

var isTrue = true;
// Which function will be invoked?
// Change the value of isTrue above to make the other function get invoked
isTrue ? flow1() : flow2(); // invokes flow1


// ARRAYS
// -accessing values

var abc = ['ayy', 'bee', 'cee'];
var a = abc[0];
var c = abc[2];
var b = abc[1];

// -adding values (push, unshift)
// ADD 'dee' to the end
abc.push('dee')
// ADD 'zee' to the front
abc.unshift('zee')
// - .length
// SHOW how many items are in the array
abc.length;

abc; 

// - for loops / loop over array in reverse
//UNCOMMENT the valid for loop systax
//for (declaration; condition; iterator){}
// for(var i > 0; i = array.length; i++) {}
for (var i = 0; i < array.length; i++) {}
for (var buttface = 0; buttface < array.length; buttface++) {}
// for (var j = 0; j < array.length; k++) {}
for (var i = 0; i < 100; i++) {}
for (var i = array.length - 1; i > 0; i--) {}
//for(var i = array.length - 1; i > 0; i++) {} //Don't uncomment.  Why?
for (var i = 0; i < "hello"; i++) {} //this works but wont don anything useful. NaN can't be compared
for(var i = 0; i < "hello".length; i++) {}
for(var i = ""; i.length < 10; i+="echo ") {}


// - pop, shift, splice, slice
// pop is the opposite of push so it ? it will remove item off the end of array
// shift is the opposite of unshift so it ? it will remove item from front of array
// splice does what
    //remove or insert values into the array
// slice does what
    //makes a copy of some or all of the array
        //most times before you splice you slice
        //only splice what u=you;ve sliced
        //slice, splice, replice
//let arr2 = array.slice();
//let arr3 = array.splice(1,2);
//array = arr3;

// make a copy of the abc array, exclude the first and last item
// call it abcCopy
var abcCopy = abc.slice(1, abd.length-1);
// remove dee from the end of the abc array
abc.pop()
// remove zee from the start of the abc array
abc.shift();
// logically compare the abc array to abcCopy
// var compare = abc === abcCopy      //this does ot work!


// remove bee from the abc array


// objects
var englishNumbers = {
    1: "one",
    2: "two",
    3: "three",
    sentence: "I can count to "
}

var frenchNumbers = {
    1: "un",
    2: "deux",
    3: "trois",
    phrase: "Je peut compte a "
}

// - dot notation
// - dot notation to add property
// ADD number 4 with dot notation
// - bracket notation to add property
englishNumber[4] = "four";

frenchNumbers[4] = "quatre"
// ADD numbers 4, 5, 6, 7, 8, 9, 10 with bracket notation
// ADD a property "flare" with "voila" as a value IF the translated value for 2
// Does not start with a t
// - bracket notation

function translate(languageObject, sentencePropertyName) {
    //GET the sentenceValue using the sentencePropertyName
    var sentenceValue = languageObject[sentencePropertyName];
    //GET the translated value of 3 and add it to the sentenceValue above
    var addThree = sentenceValue + languageObject[3];
    //GET all 3 numbers and add them to the end as a string
    //return the finally result
    // IE - "I can count to 3 : 1, 2, 3"
}

translate(englishNumbers, "sentence")

// Nested objects and Arrays

var cats = [{
    name: "Socks",
    color: "black",
    meow: function () {
        console.log("Socks says Meow")
    }
}, {
    name: "Garfield",
    color: "Orange",
    meow: function () {
        console.log("Garfield says Meow")
    }
}, {
    name: "Garfield 4",
    color: "Orange",
    meow: function () {
        console.log("Garfield says Meow")
    }
}, {
    name: "Garfield 2",
    color: "Orange",
    meow: function () {
        console.log("Garfield says Meow")
    }
}, {
    name: "Garfield 3",
    color: "Orange",
    meow: function () {
        console.log("Garfield says Meow")
    }
}, {
    name: "El Diable",
    color: "Hairless",
    meow: function () {
        console.log("El Diable says Meow")
    }
}]

//Put the color of the 2nd cat on a variable
var catColor = cats[1].color;
//Make El Diable say meow
cats[5].meow();
//Delete all Orange cats
for(var i = cats.length - 1; i >= 0; i--){   // you have to loop through this backwards to work
    if(cats[i].color === "Orange"){          // looping forwards will skip some items after deleting others
        cats[i].splice(i,1);
    }
}

// callbacks
// -pattern in JS. function passed in as argument

// UNCOMMENT THIS CODE
function phone() {
    var calledUsingPhone = "it's later";
}

setTimeout(phone, 1000);

// setTimeout(function() {
//     var later = "it's later";
//     later;
// }, 1000);


//WRITE a function : waitForFood, it logs, "hurray"
function waitForFood(){
    console.log("Hurray");
}
function orderFood(tableNumber) {
    setTimeout(tableNumber, 2000);
}

//INVOKE orderFood with the function waitForFood as a parameter
orderFood(waitForFood);

function doTimes(times, func) {
    for (var i = 0; i < times; i++) {
        times;
        i;
        func;
        //Invoke function passing in i        
    }
}

var arr = [];
function sayHi(index) {
    arr.push("Hi" + index)
}

//INVOKE doTimes and say hi 3 times
arr;

//MAKE a function, say goodbye, that adds goodbye to the array
//INVOKE doTimes and say goodbye 5 times

//INVOKE doTimes and say 'echo' 3 times with a one line arrow function