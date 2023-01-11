const prompt=require('prompt-sync')();
let n1 = Number(prompt("Enter your birthdate: ")); // please input the date in ddmmyyyy format otherwise it will 
let n = new Date();
let str="";
str += n.getDate();
str += n.getMonth()+1;
str += n.getFullYear();
let num = Number(str);
if(n<=0){
    console.log("Invalid date");    
}else{
    console.log(n1 - num)
}