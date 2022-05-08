const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const buttons = document.querySelector('.container').querySelectorAll('div');
var calcQueue = "";

const clearDisplay = () =>{
    display.innerText = "";
    calcQueue = "";
}

const negativeHelper = (queue) =>{
    for(let i = 0; i<queue.length; i++){
        if(queue[i]=='-'&& queue.length>3){
            queue[i]+=queue[i+1]
            queue.splice(i+1,1)
        }

    }
    return queue;
}

const calculateAnswer = () =>{
    calcQueue = display.innerText;
    let tempQueue = negativeHelper(calcQueue.split(/(?=[*/+-])|(?<=[*/+-])/g));
    if(tempQueue.length >= 3){

        
        display.innerText = operate(tempQueue[0],tempQueue[2],tempQueue[1]);
    }  

}

buttons.forEach((button)=>{
    if(button.className=='clear'){
        button.addEventListener('click',clearDisplay);
    }
    else if(button.className=='equal'){
        button.addEventListener('click',calculateAnswer);
    }
    else{
        
        button.addEventListener('click', () => {
            display.innerText += button.dataset.value;
            
        });
    }
});

