import store from "../store.js";
import Todo from "../models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Dieter/todos/",
  timeout: 8000
});

class TodoService {
  // debugger shows im bringing in data but my new Todo is returning undefined
  // map!!!!!
  getTodos() {
    todoApi.get("").then(res =>{
      let todos = res.data.data.map(t => new Todo(t));
      // store.commit("houses", houses);
      
      debugger
      
      // let todo = new Todo(res.data.data);
      // let todos = [...store.State.todos, todo]
      store.commit("todos", todos)
      
    
    })
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo).then(res =>{
      let todo = new Todo(res.data.data);
      let todos = [...store.State.todos, todo]
      store.commit("todos", todos)
  
    })
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }
  editTodo(id, update) {
    todoApi
      .put(id, update)
      .then(res => {
        debugger;
        let todo = store.State.todos.find(t => t._id != id);
        for (let prop in update) {
          todo[prop] = update[prop];
        }
        console.log(todo);
        
        store.commit("todos", store.State.todos);
      })
      .catch(error => {
        console.error(error);
      });
  }
  

  toggleTodoStatusAsync(id) {
    let todos = store.State.todos.find(todo => todo._id == id);
     store.commit("todos", todos)
    

    // todoApi.put(id, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(id) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(id).then(() =>{
      let todos = store.State.todos.filter(t => t._id !=id);
      store.commit("todos", todos)
    })
    
  }
}

const todoService = new TodoService();
export default todoService;