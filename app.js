var vue = new Vue({
    el: '#app',
    data: {
        todos: [],
        name:"",
        description:"",
        completed: "",
        assignedTo:"",
        id:""
    },
    methods: {

        getToDo: function() {
            var url = 'https://todos-list-sj.herokuapp.com/todos';
            this.$http.get(url)
            .then(response => {
                this.todos = response.body;
                return this.todos;
            })
            .catch(error => { console.log("post error") })
        },

        addToDo:function(){    
        this.$http.post('https://todos-list-sj.herokuapp.com/todos',{
            name:this.name,
            description:this.description,
            assignedTo:this.assignedTo,
            completed:this.completed
            
        })
        .then(response => { console.log(response)})
        .catch(error => { console.log("post error") })
        },

        getToDoByUser: function() {
            this.$http.get('https://todos-list-sj.herokuapp.com/todos?byUser=' +this.assignedTo, {
                assignedTo:this.assignedTo
                    
            })
            .then(response => { 
                this.todos = response.body;
                console.log(response)
            })
            .catch(error => { console.log("post error") })
        },
    
        deleteToDoById: function(){
            this.$http.delete('https://todos-list-sj.herokuapp.com/todos/' + this.id, {
            id:this.id
            })
            .then(response => { console.log(response)})
            .catch(error => { console.log("post error") })
        },

        getToDoByCompleted: function(){
            this.$http.get('https://todos-list-sj.herokuapp.com/todos?completed=' +this.completed, {
                completed:this.completed
            
            })
            .then(response => {
                this.todos = response.body;
                console.log(response)})
            .catch(error => { console.log("post error") })
        },

        created: function() {
            
        }
    }
})