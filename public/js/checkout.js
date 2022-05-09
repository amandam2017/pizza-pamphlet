checkoutBtnelem = document.querySelector('.checkoutBtn');
const checkoutElem = document.getElementById('hiddenCheckout');

checkoutBtnelem.addEventListener('click', function(){
    // const order = cartElem.value;
    // if(order){
    //     console.log(cartElem.value)
    // }
    checkoutElem.style.display = 'block';
})