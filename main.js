// Add Two Numbers 

function add(x,y) {
    let result = x + y
   return result
    
}
let AllResult = add(100,200) + add(600,500) + add(50,80)

console.log(AllResult);

// Even or Odd checker 

function isEven(num) {
    // if(num % 2 === 0){
    //     return "Even"
    // } else {
    //     return "Odd"
    // }

    return num % 2 === 0 ? "Even" : "Odd"
}

console.log(isEven(6));

// convert celcius to farenhite 

function CelciusToFarenhite(celcius) {
    return (celcius * 9/5) + 32
}
console.log(CelciusToFarenhite(2));

// Square of a number 

function squareNumber(num) {
    return num * num
}
console.log(squareNumber(5));

//get first character of a string

function FirstCharacter(str) {
    return str.charAt(1)
}
console.log(FirstCharacter("Hello"));


// Number is positive or Nagetive 

function CheckNum(num) {
    // if(num>=0){
    //     return "Positive"
    // } else {
    //     return "Negative"
    // }

    return num >= 0 ? "Positive" : "negative";

   
}
console.log(CheckNum(-9));

// Multiply Two Number
function multiply(x,y){
    if(typeof x !== "number"){
        return "1st number is not a number"
    } else if(typeof y !== "number"){
        "2nd number is not a number"
    }else{
        return x * y;
    }
}
console.log(multiply(10,30));


// Convert to minute to  second 

function minuteTosecond(min) {
    return min * 60
}
console.log(minuteTosecond(60));

// Concatenate Two Strings

function concatenate(x,y){
    return x + " " + y
} 
   console.log(concatenate("Hello" , "Javascript"));

//   Check if a strings contains a word

function checkSTR(sentence, word){
        return sentence.includes(word)
}
    console.log(checkSTR("I love Javascript" , "Javascript"));
    

