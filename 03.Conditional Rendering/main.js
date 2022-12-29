const app = Vue.createApp({
    data()
    {
        return{
            message : "Conditional Rendering",
            product: "Shoes",
            quantity:25,
            onSale:true,
        }
    }
})

const mountApp = app.mount("#app");