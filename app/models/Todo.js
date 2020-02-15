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
    <p>${this.description}</p><button type="button" class="btn btn-primary"></button><button type="button" class="btn btn-danger"></button>
  </div>



    
    `
  }
}