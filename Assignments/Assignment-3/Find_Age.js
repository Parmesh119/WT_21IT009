const prompt=require('prompt-sync')();
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    // var age_dt = new Date(diff_ms); 
    console.log(diff_ms);
}
let n1 = prompt("Enter your birth date: ")
// let n2 = prompt("Enter second date: ")
console.log(calculate_age(new Date(n1)));
// console.log(calculate_age(new Date(n2)));