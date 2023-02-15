let timesadd=document.querySelector('.timesadd');
let tabscreen=document.querySelector('.tabscreen');
let clear=document.querySelector('.clear');
let start=0;
tabscreen.addEventListener('click',_=>{
    start++;
    timesadd.textContent=start;
})
clear.addEventListener('click',_=>{
    timesadd.textContent=0;
    start=0;
})