const app = Vue.createApp({
    data(){
        return{
            comments : [
                {
                    username:"alice",
                    content: "Very First comment!!!"
                },
                {
                    username:"bob",
                    content: "second comment!!!"
                },
                {
                    username:"ironman",
                    content: "third comment!!!"
                },
                {
                    username:"superman",
                    content: "fourth comment!!!"
                }
            ]
        }
    },
    methods:
    {

    }
})

app.component("comment",{
    props:{
        comment:{
            type:Object,
            required:true
        }
    },
    template: 
    /*html*/
    `
    <div>
        <div class="card-body">
            <div>
                <strong><p>{{comment.username}}</p></strong>
                <p>{{comment.content}}</p>
            </div>
        </div>
        <hr>
    <div>
    `
})

const mountedApp = app.mount("#app");