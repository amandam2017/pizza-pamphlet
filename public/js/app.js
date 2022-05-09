
document.addEventListener('alpine:init', () => {
    Alpine.data('pizzas', () => ({
        smallTotalPrice: 0.00, 
        mediumTotalPrice: 0.00, 
        largeTotalPrice: 0.00,
        smallQty: 0, 
        mediumQty: 0, 
        largeQty: 0,
        totalPrice() {
            console.log(this.smallTotalPrice)
            return this.smallTotalPrice + Number(this.mediumTotalPrice) + Number(this.largeTotalPrice)
        },
        // addSmall(){
        //      this.smallQty++
        // }
    }))
})
