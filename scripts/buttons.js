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

        if(queue[i]=='-' && queue[i+1]=='-'){
            queue[i]='+'
            queue.splice(i+1,1);
        }
        if(queue[0]=='-'){
            queue[i]+=queue[i+1]
            queue.splice(i+1,1)
        }
                
    }
    return queue;
}

const calculateAnswer = (queue) =>{
    
    let tempQueue = negativeHelper(queue.split(/(?=[*/+-])|(?<=[*/+-])/g));
    console.log(tempQueue)
    if(tempQueue.length > 3){
        while(tempQueue.length > 3){
            let newTemp = tempQueue.splice(0,3);
            let holder = operate(newTemp[0],newTemp[2],newTemp[1]);
            tempQueue.unshift(holder)
        }     
        
    }
    return operate(tempQueue[0],tempQueue[2],tempQueue[1]);
}

buttons.forEach((button)=>{
    if(button.className=='clear'){
        button.addEventListener('click',clearDisplay);
    }
    else if(button.className=='equal'){
        button.addEventListener('click',()=>{
            calcQueue = display.innerText;
            display.innerText = calculateAnswer(calcQueue)}
        );
    }
    else{
        
        button.addEventListener('click', () => {
            display.innerText += button.dataset.value;
            
        });
    }
});

