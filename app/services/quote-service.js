import Quote from "../models/Quote.js";
import store from "../store.js"
// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  getQuote() {
    _quoteApi.get("").then(res =>{
      
      
      let quote = new Quote(res.data)
    
      store.commit("quotes", quote)
    
    })
  }
  
}

const quoteService = new QuoteService();
export default quoteService;
