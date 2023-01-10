// const prompt = require('prompt-sync')();
function add(Num1, Num2){
    const n1 = Number(Num1);
    const n2 = Number(Num2);
    alert(n1 + n2);
}
function subtraction(Num1, Num2){
    const n1 = Number(Num1);
    const n2 = Number(Num2);
    alert(n1 - n2);
}
function mul(Num1, Num2){
    const n1 = Number(Num1);
    const n2 = Number(Num2);
    alert(n1 * n2);
}
function divison(Num1, Num2){
    const n1 = Number(Num1);
    const n2 = Number(Num2);
    if(n1 == 0){
        alert(n1 / n2);
    }else{
        alert(n2 / n1)
    }
}
function mod(Num1, Num2){
    const n1 = Number(Num1);
    const n2 = Number(Num2);
    alert(n1 % n2);
}

// let ch = prompt('Enter the operation that you have to do in basic calculator:')
// let num1 = Number(prompt('Enter the first number:'))
// let num2 = Number(prompt('Enter the second number:'))
// if(document.getElementById()){
//     console.log(add(num1, num2))
// }else if(ch == '-'){
//     console.log(subtraction(num1, num2))
// }else if(ch == '*'){
//     console.log(mul(num1, num2))
// }else if(ch == '/'){
//     console.log(divison(num1, num2))
// }else if(ch == '%'){
//     console.log(mod(num1, num2))
// }else{
//     console.log('Invalid operation that you are doing!PLease run again...')
// }