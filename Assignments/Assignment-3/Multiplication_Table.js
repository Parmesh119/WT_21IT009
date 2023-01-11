const prompt=require('prompt-sync')();
let n = prompt("Enter the number: ");
let m = prompt("Enter the range: ");
if(n==0){
    console.log("Cannnot make the multiplication");
}else{
    for(let i=1;i<=m;i++){
        // console.log("The multiplication of "+ n +" with " + i + " is " + n*i);
        console.log(n + " * " + i + " = " + (n * i));
    }
}