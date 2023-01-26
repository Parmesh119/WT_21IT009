const prompt=require('prompt-sync')();
let n1 = prompt("Enter your first date:");
let n2 = prompt("Enter your second date:");// please enter the dates in mm/dd/yyyy format, otherwise it will give error. 
var date1 = new Date(n1);
var date2 = new Date(n2);
// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();
Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//To display the final no. of days (result)
console.log("The Number of days between " + n1+" and " + n2 + " is " + Difference_In_Days);
