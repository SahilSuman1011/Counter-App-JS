// logic
// onClick attribute can call function to fire 

const countValue = document.querySelector('#counter');

const increment = () => {
    //getting the value from ui
   let value = parseInt (countValue.innerText);
   //update the value
   value = value + 1;
   //set the value on to ui
   countValue.innerText = value;
};

const decrement = () => {
 //getting the value from ui
 let value = parseInt (countValue.innerText);
 //update the value
 value = value - 1;
 //set the value on to ui
 countValue.innerText = value;
};