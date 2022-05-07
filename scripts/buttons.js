const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const buttons = document.querySelector('.container').querySelectorAll('div');

const clearDisplay = () =>display.innerText = "";

const calculateAnswer = () =>{
    tempQueue = calcQueue.split(/(?=[*/+-])|(?<=[*/+-])/g);
    if(tempQueue.length == 3){
        display.innerText = operate(tempQueue[0],tempQueue[2],tempQueue[1]);
    }  

}

var calcQueue = "";

buttons.forEach((button)=>{
    if(button.className=='clear'){
        button.addEventListener('click', () => {
            clearDisplay()
            calcQueue = "";
          });
    
    }
    else if(button.className=='equal'){
        button.addEventListener('click', () => {
            calcQueue = display.innerText;
            
            calculateAnswer();
            
          });
    
    }
    
    else{
        
        button.addEventListener('click', () => {
            display.innerText += button.dataset.value;
            
        });
    }

});

