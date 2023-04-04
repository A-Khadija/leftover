'use strict';

// all initial elements
const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const subtotalElem = document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');
var qte = 1;

// loop: for add event on multiple `increment` & `decrement` button
for (let i = 0; i < incrementBtn.length; i++) {

  incrementBtn[i].addEventListener('click', function () {

    // collect the value of `quantity` textContent,
    // based on clicked `increment` button sibling.
    let increment = Number(this.previousElementSibling.textContent);

    // plus `increment` variable value by 1
    increment++;

    // show the `increment` variable value on `quantity` element
    // based on clicked `increment` button sibling.
    this.previousElementSibling.textContent = increment;
    qte=increment;
    

  });


  decrementBtn[i].addEventListener('click', function () {

    // collect the value of `quantity` textContent,
    // based on clicked `decrement` button sibling.
    let decrement = Number(this.nextElementSibling.textContent);

    // minus `decrement` variable value by 1 based on condition
    decrement <= 1 ? 1 : decrement--;

    // show the `decrement` variable value on `quantity` element
    // based on clicked `decrement` button sibling.
    this.nextElementSibling.textContent = decrement;
    qte=decrement;
    

  });

}




const closeBtns = document.querySelectorAll('.product-close-btn');

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cartId = btn.closest('.card').getAttribute('id');
    const cart = document.querySelector(`#${cartId}`);
    cart.style.display = 'none';
  });
});


let lastSubtotal = 0;
function totalCalc() {
  const input_one = document.getElementById('price').innerHTML;
  const input_three = document.getElementById('count').innerHTML;
  let input_two = Number(input_one) * Number(qte);
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.textContent = input_two;
  lastSubtotal += input_two; 
}

function discount(){
  const subtotalElement = document.getElementById('subtotal').innerHTML;
  let input_two = 0.10 * Number(subtotalElement) / 100 ;
  console.log(input_two);
  document.getElementById('tax').textContent = input_two;
  const tax =document.getElementById('tax').innerHTML;
  let input =  Number(subtotalElement) - Number(tax);
  console.log(input);
  document.getElementById('total').textContent = input;
}


  
