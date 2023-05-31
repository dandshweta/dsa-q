const str = "123";
let str1 = "456";
var str2 = "678";
let str3 = "abc";
const num = parseInt(str);
const num1 = parseInt(str1);
const num2 = parseInt(str2);
const num3 = parseInt(str3);
console.log(num); // outputs 123
console.log(num1); //456
console.log(num2); //678
console.log(num3); //NaN
//if the string being parsed is not a valid number, parseInt() will return NaN (Not a Number).

let number = "12345";
const string = parseInt(number);
console.log(string);
