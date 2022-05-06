const { init } = require("express/lib/application")

document.addEventListener('alpine:init', () => {
    Alpine.data('qty', () => ({
        increaseOrDecrease: 0,

        init(){
            this.increaseOrDecrease
        }

    }))
})
