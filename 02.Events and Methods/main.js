const app = Vue.createApp({
    data()
    {
        return{
            message : "Events and Methods",
            num : 3,
            counter: 0,
            img: "https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg", 
        }
    },
    methods:
    {
        increamentCounter(){
            this.counter = this.counter + 1;
            console.log("working fine!!");
            if(this.counter === 10){
                alert("counter value is reached to 10!");
                
            }
        },
        mouseOver()
        {
            console.log("mouseOver method is working fine!!!")
        }
    }
})

const mountApp = app.mount("#app");
