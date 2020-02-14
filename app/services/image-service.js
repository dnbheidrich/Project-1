import Image from "../models/Image.js"
import store from "../store.js"



// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  
constructor(){}
async getImage() {
  // console.log("Calling the Weatherman");
  let res = await imgApi.get();
  store.commit("images", new Image(res.data));
}

}

const imageService = new ImageService();
export default imageService;
