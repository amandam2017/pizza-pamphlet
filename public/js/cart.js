// reference my elements
const orderSmallBtnElem = document.querySelector('.buy-small');
const orderMediumBtnElem = document.querySelector('.buy-medium');
const orderLargeBtnElem = document.querySelector('.buy-large');

const cartElem = document.getElementById('hidden');


orderSmallBtnElem.addEventListener('click', function(){
    const order = cartElem.value;
    if(order){
        console.log(cartElem.value)
    }
    cartElem.style.display = 'block';
})

orderMediumBtnElem.addEventListener('click', function(){
    const order = cartElem.value;
    if(order){
        console.log(cartElem.value)
    }
    cartElem.style.display = 'block';
})

orderLargeBtnElem.addEventListener('click', function(){
    const order = cartElem.value;
    if(order){
        console.log(cartElem.value)
    }
    cartElem.style.display = 'block';
})
