const rs = require('readline-sync');

function division() {
   let num1 = rs.questionInt('Please enter the first number: ');
   let num2 = rs.questionInt('Please enter the second number: ');
   console.log( 'X = ' + num1 / num2);
}

function multiplication() {
   let num1 = rs.questionInt('Please enter the first number: ');
   let num2 = rs.questionInt('Please enter the second number: ');
   console.log( 'X = ' + num1 * num2);
}

function subtraction() {
   let num1 = rs.questionInt('Please enter the first number: ');
   let num2 = rs.questionInt('Please enter the second number: ');
   let sub = num1 - num2;
   console.log( 'X = ' + sub);
}

function addition() {
   let num1 = rs.questionInt('Please enter the first number: ');
   let num2 = rs.questionInt('Please enter the second number: ');
   let sum = num1 + num2;
   console.log( 'X = ' + sum);
}

const userCase =  rs.question('What operation would you like to perform? / divide, * multiply, - subtract, a add?: ');

if (userCase == '/') { division(); } 
else if (userCase == '*') { multiplication(); } 
else if (userCase == '-') { subtraction(); } 
else if (userCase == 'a') { addition(); } 
else {
   console.log('That is not a valid operation');
   userCase;
}

// The reason I used 'a' instead of '+' is because my terminal does something weird when I try to use '+'
// Also I know that questionInt makes you have to put in a number in order proceed.