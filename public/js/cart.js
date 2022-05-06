// reference my elements
// 1. all buttons
// const orderMedBtnElem = document.querySelector('.buy-med');
// const orderLargeBtnElem = document.querySelector('.buy-large');
const orderSmallBtnElem = document.querySelector('.buy-small');
const cartElem = document.getElementById('hidden');

orderSmallBtnElem.addEventListener('click', function(){
    const order = cartElem.value;
    if(order){
        console.log(cartElem.value)
    }
    cartElem.style.display = 'block';
})