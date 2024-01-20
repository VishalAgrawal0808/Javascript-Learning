let score = "23"
let score1 = "23abc"

console.log(typeof score)
console.log(typeof(score1))

// Converting String to Number
let valueInNumberForScore = Number(score)
let valueInNumberForScore1 = Number(score1)

console.log(typeof(valueInNumberForScore))
console.log(typeof(valueInNumberForScore1))

console.log(valueInNumberForScore)              // 23
console.log(valueInNumberForScore1)             /* NaN (bcz String was a combination if integers and characters)
                                                 JS is not that smart to detect this combination rather it will 
                                                 try to convert what we will ask it to do
                                                 */


/* 
Outputs for converting variables to Number
            "33" => 33
            "33ab" => NaN
            true => 1;    false => 0
*/

// ------------------------------------------------------------------------------------------------------------

let isLoggedIn = 1
let whenValueIsEmpty

let valueInBoolean =  Boolean(isLoggedIn)
let valueInBoolean1 =  Boolean(whenValueIsEmpty)

console.log(typeof valueInBoolean);              // boolean
console.log(valueInBoolean)                      // true
console.log(valueInBoolean1)                     // false (if whenValueIsEmpty = "" then also we will get false)

/* 
Outputs for converting variables to Boolean:
            1 -> true;  0 -> false
            "" -> false
            "Hitesh" -> true
*/


// ------------------------------------------------------------------------------------------------------------

let someNumber= 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)