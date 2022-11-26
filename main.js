const rates =document.querySelectorAll('.number>span');
// let rateAdded= document.querySelector('span>#rate-added');
// console.log(rateAdded);
const thank=document.querySelector('.thank')
const rating=document.querySelector('.rating')
const submit= document.querySelector('#submit')

// xxxxxxxxxxxxxxxx
let rate;    
    function setRates(a) {
      rate = a;        
      document.getElementById('rate').innerHTML = rate;
    }
// xxxxxxxxxxxxxx

submit.addEventListener('click',()=>{
 if(rate==null){
  alert('choice any rate from 1 to 5')
 }else{ 
   rating.style.display='none';
   thank.style.display='block';
  }
}) 
rates.forEach(element => {
    element.addEventListener('click',(e)=>{
     
      rateAdded =e.target.innerHTML;
    })
  }); 