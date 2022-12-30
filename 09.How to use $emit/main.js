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
        addNewComment(newComment)
        {
            this.comments.push(newComment);
        }
    }
})

app.component("comment-list",{
    emits:["submit-comment"],
    props:{
        comments:{
            type:Array,
            required:true
        }
    },
    data()
    {
        return{
            commentAuthor:null,
            commentBody:null,
            error:null
        }
    },
    methods:
    {
        onSubmit()
        {
            const newComment={
                username : this.commentAuthor,
                content: this.commentBody
            }
            this.$emit("submit-comment",newComment)
        }
    },
    template: 
    /*html*/
    `
    <div class="container mt-4 mb-2">
        <single-comment v-for="(comment,index) in comments" 
                 v-bind:comment="comment" 
                 v-bind:key="index">
        </single-comment>
        <hr>
        <h3>{{error}}</h3>

        <form action="" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="commentAuthor">Username</label>
            <input v-model="commentAuthor" type="text" class="form-control" id="commentAuthor">
        </div>

        <div class="form-group">
            <label for="commentBody">Add a Comment!</label>
            <input v-model="commentBody" type="text" class="form-control" id="commentBody">
        </div>

        <button class="btn btn-sm btn-primary" type="submit">Publish</button>
        </form>
    </div>
    `
})


app.component("single-comment",{
    props:{
        comment:{
            type:Object,
            required:true
        }
    },
    template: 
    /*html*/
    `
    <div class="mb-2">
        <div class="card">
            <div class="card-header">
                <p>{{comment.username}}</p>
            </div>
            <div class="card-body">
                <div>        
                    <p>{{comment.content}}</p>
                </div>
            </div>
        </div>
        <hr>
    <div>
    `
})

const mountedApp = app.mount("#app");