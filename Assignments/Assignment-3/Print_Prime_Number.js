const prompt=require('prompt-sync')();
function prime(n1){
    for(let i=2 ; i<=n1/2 ; i++){
        if(n1 % i == 0){
            return false;
        }
    }
    return true;
}

let n1 = prompt("Enter your first number:");
let n2 = prompt("Enter your second number:");
for(let i=n1;i<=n2;i++){
    if(prime(i)){
        console.log(i+" ");
    }
}