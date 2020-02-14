import Image from "../models/Image.js"
import store from "../store.js"



// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  

getImage() {
  console.log("Calling the Image");
imgApi.get("").then(res =>{
  console.log(res);
  
  let image = new Image(res.data)

  store.commit("images", image)

})
}

}

const imageService = new ImageService();
export default imageService;
