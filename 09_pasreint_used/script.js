var fastNumber = prompt("Enter first number :");
var lastNumber = prompt("Enter second number :");

//cobnvert to integer
var fastNumber = parseInt(fastNumber, 10);
var lastNumber = parseInt(lastNumber, 10);

var totalSum, totalDecress, totalCross, totalSoman, totalPercentage;

//  + korlam
totalSum = fastNumber + lastNumber;
document.write(`20 + 10 =  ${totalSum} <br/>`);

// - korlam
totalDecress = fastNumber - lastNumber;
document.write(`20 - 10 =  ${totalDecress}<br/>`);

// * korlam
totalCross = fastNumber * lastNumber;
document.write(`20 * 10 = ${totalCross}<br/>`);

//  (/ korlam)
totalSoman = fastNumber / lastNumber;
document.write(`20 / 10 = ${totalSoman}<br/>`);

//
totalPercentage = fastNumber % lastNumber;
document.write(`20 % 10 = ${totalPercentage}`);
