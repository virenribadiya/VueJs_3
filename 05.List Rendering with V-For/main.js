const app = Vue.createApp({
    data(){
        return {
            users:[
                {
                    id:567,
                    name:"Bob",
                    proffesion:"developer"
                },
                {
                    id:568,
                    name:"Boby",
                    proffesion:"farmer"
                },
                {
                    id:569,
                    name:"superman",
                    proffesion:"acting"
                },
                {
                    id:567,
                    name:"batman",
                    proffesion:"acting"
                }
            ],
        }
    },
    methods:
    {
        
    }
})

const mountApp = app.mount("#app");