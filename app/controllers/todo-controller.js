import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function drawTodo() {
  let todos = store.State.todos;
  let todoElem = document.getElementById("todo");
  let template = "";

  todos.forEach(todos => {
    template += todos.Template;
  });

  todoElem.innerHTML = template;
  
  // todo.forEach(t => {
  //   template += t.Template;
  // });

  // todoElem.innerHTML = template;
}

export default class TodoController {
  constructor() {
    let todos = store.State.todos;
  let todoElem = document.getElementById("todo");
  let template = "";

  todos.forEach(todos => {
    template += todos.Template;
  });

  todoElem.innerHTML = template;
    store.subscribe("todos", drawTodo);
    
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }
  

  addTodoAsync(event) {
  
    event.preventDefault();
    var form = event.target;
    var todo =  {
    //  _id: form._id.value,
    //  completed: form.completed.value,
     description: form.description.value
      // this._id = data._id
      // this.completed = data.completed 
      // this.description = data.description
      //TODO build the todo object from the data that comes into this method
    };
    form.reset();
    
    
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(id) {
    TodoService.toggleTodoStatusAsync(id)
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(id) {
    TodoService.removeTodoAsync(id);
  }
}