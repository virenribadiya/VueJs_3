const app = Vue.createApp({
    data(){
        return {
            data:"hello",
            flag:false,
            styledObject:{backgroundColor:'green' ,border: '2px solid orange'},
        }
    },
    methods:
    {
        changeShape(){
            this.flag = !this.flag
        }
    }
})

const mountApp = app.mount("#app");