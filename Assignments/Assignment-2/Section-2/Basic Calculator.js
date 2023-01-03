// const prompt = require('prompt-sync')();
function add(num1, num2){
    console.log(num1 + num2)
}
function subtraction(num1, num2){
    console.log(num1 - num2)
}
function mul(num1, num2){
    console.log(num1 * num2)
}
function divison(num1, num2){
    if(num1 == 0){
        console.log(num1 / num2)
    }
    console.log(num2 / num2)
}
function mod(num1, num2){
    console.log(num1 % num2)
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