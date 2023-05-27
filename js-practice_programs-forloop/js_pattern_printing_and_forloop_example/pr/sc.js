
//hello world
console.log('Hello World');


//variables
let a = 5;
let b = 4;
let c = a+b;
console.log ("c=" +c);

//find square root
let number = 25;

let result = Math.sqrt(number);
console.log("The square root of 25 is " +result);


//Area of Triangle
let base=5;
let height=7;
let area= ((1/2)*base*height);
console.log("area of triangle " +area);


//swapping two numbers
let d=5;
let e=7;
let temp;
temp=d;
d=e;
e=temp;
console.log("swapping two numbers");
console.log("the value of d after swapping " +d);
console.log("the vALUE OF e after swapping " +e);

//convert kilometers to miles
let km=5;
let mi=0.62*km;
console.log("miles=" +mi);


//convert celcius to fahrenhite
let celcius=30;
let f=(celcius*1.8)+32;
console.log("fahrenheit temprature=" +f);

//print array
const arr=['shweta',"raut",25];
console.log(arr);
//add element in array
arr[3]="hello";
console.log(arr);


//assignment operater
let x = 5; 
console.log(x); // 5

//arithmatic operator
let l=10;
let m=5;
console.log("l+m=" ,l + m);
console.log("l-m=", l-m);
console.log("l*m=",l*m);
console.log("l/m=",l/m);
console.log("l%m=",l%m);

console.log("++l =",++l); //11
console.log("l++ =",l++);//print 11 then inc 12
console.log(l);
console.log("--l =",--l);//print 11 
console.log("l-- =",l--);//print 11 then 10
console.log(l);
console.log("l**m=",l**m);

//if statements

if(new Date().getHours()<18)
{
    console.log("Good Day!");
}


//if-else statements

if(new Date().getHours()<18)
{
    console.log("Good Day!");
}
    else{
        console.log("Have a nice day!");
}


//print todays completed hours
console.log(new Date().getHours());

//if-elseif-else ststements

if(new Date().getHours() < 10)
{
    console.log("good day!");
}
else if(new Date().getHours()<15)
{
    console.log("have a good day!");
}
else
{
    console.log("good evening!");

}


//switch case

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("today is " + day);

//for loop
//print 0 to 4 numbers

for (let i = 0; i < 5; i++) {
    
    console.log("the number is " +i);
   }
   
// for-in
   const numbers = [45, 4, 9, 16, 25];

   let txt = "";
   for (let x in numbers) {
     txt += numbers[x] + "\n";
   }
   console.log(txt);

//while loop
//print 1 to 10 number
   let input=1;
   while (input <= 10) 
   {
    console.log("The number is " + input);
    input++;
    
  }
//do-while loop
let no=0;
do{
    console.log("The number is " + no);
    no++;
    
  }
while(no<=9)

//--------------star patterns----------------------




let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);


let p = 6;
let stringg = "";
for(let i = 0; i < p; i++){
    for(let j = 0; j < p; j++)
    {
        stringg +="*";

    }
    stringg += "\n";
}
    console.log(stringg);

let stringgg = "";
for( let i=0; i<5; i++){
    stringgg +="*";
}
console.log(stringgg);



   












