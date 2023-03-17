const counterValue=document.querySelector(".counter");
// increment the vaue
const increment=()=>{
    let value=parseInt(counterValue.innerText);
    value=value+1;
    counterValue.innerText=value; 
};
//decrement the value
const decrement=()=>
{
   let value=parseInt(counterValue.innerText);
   value=value-1;
   counterValue.innerText=value;
};