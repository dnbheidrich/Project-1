import QuoteService from "../services/quote-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function drawQuote() {
  let quote = store.State.quotes['Template']
  document.getElementById("quote").innerHTML = quote
  
}
export default class QuoteController{
  constructor(){
    store.subscribe("images", drawQuote);
    QuoteService.getQuote();
  }
}

