const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const buttons = document.querySelector('.container').querySelectorAll('div');

const clearDisplay = () =>display.innerText = "";

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
            console.log(calcQueue);
            clearDisplay();
            
          });
    
    }
    
    
    else{
        
        button.addEventListener('click', () => {
            display.innerText += button.innerText;
            
        });
    }

    

    
});

