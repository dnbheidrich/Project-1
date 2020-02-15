export default class Quote{
  constructor(data){

    this.id = data.quote.id
    this.dialogue =  data.quote.dialogue
   this.private =  data.quote.private
   this.tags =  data.quote.tags
   this.url =  data.quote.url
   this.favorites_count =  data.quote.favorites_count
   this.upvotes_count =  data.quote.upvotes_count
   this.downvotes_count=  data.quote.downvotes_count
    this.author =  data.quote.author
    this.author_permalink = data.quote.author_permalink
    this.body =  data.quote.body
  }
  get Template(){
    return `
    <h2 class = "blue">${this.author}</h2>
<p class= "blue">${this.body}</p>
    
    `
  }
}
// data.quote.