const add = (a,b)=>parseFloat(a)+parseFloat(b);
const subtract = (a,b)=>parseFloat(a)-parseFloat(b);
const multiply = (a,b)=>parseFloat(a)*parseFloat(b);
const divide = (a,b)=>{
    if(b==0)
        return 'Infinity';
    return parseFloat(a)/parseFloat(b);
}
var operate = (a,b,op) =>{
    const operations = {
        '+': add(a,b),
        '-': subtract(a,b),
        '*': multiply(a,b),
        '/': divide(a,b)
    }
    let result = operations[op];
    if(result == 'Infinity')
        return result;
    
    return Math.round(result*100)/100
}

module.exports = operate;