const app = Vue.createApp({
    data(){
        return {
            comment:null,
            comments:[],
            error:null
        }
    },
    computed:{
        
    },
    methods:
    {
        onSubmit()
        {
            if(this.comment){
                let newcomment = this.comment;
                this.comments.push(newcomment);
                this.comment=null;

                if(this.error)
                {
                    this.error=null;
                }
            }
            else
            {
                this.error = "cant be empty!!"
            }
            
        }
        
    }
})

const mountApp = app.mount("#app");