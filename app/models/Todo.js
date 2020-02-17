export default class Todo{
  constructor(data){
    this.completed = data.completed,
this._id = data._id,
this.description = data.description,
this.user = data.user;
    // this.completed = data.completed 
    // this._id = data._id
    // this.description = data.description
  }

 
  get Template(){
    return`
   
    <div class="col-3">
    <span>${this.description}</span>
    <span>${this.completed}</span>
    <input ${this.completed ? "checked" : ""} class="form-check-input" type="checkbox" onclick= "app.todoController.editTodo('${this._id}')">
    <button type="button" 	onclick= "app.todoController.removeTodo('${this._id}')" class="btn btn-danger">
    </button>
  </div>


    
    `
  }
}
/* <button type="button" 	onclick= "app.todoController.toggleTodoStatus('${this._id}')" class="btn btn-primary"></button> */
