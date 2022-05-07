const add = (a,b)=>parseFloat(a)+parseFloat(b);
const subtract = (a,b)=>parseFloat(a)-parseFloat(b);
const multiply = (a,b)=>parseFloat(a)*parseFloat(b);
const divide = (a,b)=>parseFloat(a)/parseFloat(b);


var operate = (a,b,op) =>{

    const operations = {
        '+': add(a,b),
        '-': subtract(a,b),
        '*': multiply(a,b),
        '/': divide(a,b)
    }
    return operations[op];


}