const app = Vue.createApp({
    data()
    {
        return{
            message : "First Vue 3 Instance",
            num : 3,
            img: "https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg", 
        }
    }
})

const mountApp = app.mount("#app");
