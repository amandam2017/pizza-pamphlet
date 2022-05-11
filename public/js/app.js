
document.addEventListener('alpine:init', () => {
    Alpine.data('pizzas', () => ({
        smallTotalPrice: 0.00, 
        show(){
            return this.totalPrice()>0;
        },
        mediumTotalPrice: 0.00, 
        largeTotalPrice: 0.00,
        smallQty: 0, 
        mediumQty: 0, 
        largeQty: 0,
        action: 0,
        enteredAmount: 0,
        // successMessage,
        totalPrice() {
            // console.log(this.smallTotalPrice)
            return this.smallTotalPrice + Number(this.mediumTotalPrice) + Number(this.largeTotalPrice)
        },
        cartItems(){
            return this.smallQty + this.mediumQty + this.largeQty

        },
        smallQtyUp(){
             this.smallQty++
        },
        smallQtyDown(){
            this.smallQty--
        },
        smallPriceUp(){
            this.smallTotalPrice+=48.99
        },
        smallPriceDown(){
            this.smallTotalPrice-=48.99
        },

        //********** MEDIUM DATA *************
        medQtyUp(){
            this.mediumQty++
       },
       medQtyDown(){
           this.mediumQty--
       },
       medPriceUp(){
           this.mediumTotalPrice+=78.99
       },
       medPriceDown(){
           this.mediumTotalPrice-=78.99
       },

    //*************LARGE DATA****************

    largeQtyUp(){
        this.largeQty++
    },
    largeQtyDown(){
        this.largeQty--
    },
    largePriceUp(){
        this.largeTotalPrice+=114.99
    },
    largePriceDown(){
        this.largeTotalPrice-=114.99
    },
    //***************ERRORS****************
        // SuccessMessage(){
        //     this.successMessage = 'succesully'
        // }
    }))
})
