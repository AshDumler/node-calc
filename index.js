const rs = require('readline-sync');

function division() {
   console.log( 'X = ' + num1 / num2);
}

function multiplication() {
   console.log( 'X = ' + num1 * num2);
}

function subtraction() {
   let sub = num1 - num2;
   console.log( 'X = ' + sub);
}

function addition() {
   let sum = num1 + num2;
   console.log( 'X = ' + sum);
}

function getNumbers(numPrompt) {
   const num = rs. questionInt('Please enter the ${numPrompt} number: ');
   return num;
}

function main() {
   const userCase =  rs.question('What operation would you like to perform? / divide, * multiply, - subtract, + add?: ');
   const num1 = getNumbers('first');
   const num2 = getNumbers('second');

   if (userCase == '/') { division(num1, num2); } 
   else if (userCase == '*') { multiplication(num1, num2); } 
   else if (userCase == '-') { subtraction(num1, num2); } 
   else if (userCase == '+') { addition(num1, num2); } 
   else {
      console.log('That is not a valid operation');
      userCase;
   }
}

main();