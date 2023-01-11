const prompt=require('prompt-sync')();
let str=prompt('Enter a string: ');
let str2="";
for(let i=str.length-1;i>=0;i--){
    str2+=str.charAt(i);
}
console.log(str2);
