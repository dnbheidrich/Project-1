import ImageService from "../services/image-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function drawImage() {
  debugger
  let image = store.State.images
  document.getElementById("bg-image").innerHTML = image.Template
  console.log("THE WEATHER MAN SAYS:", store.State.images);
}
export default class ImageController {
  constructor(){
    store.subscribe("images", drawImage);
    ImageService.getImage();
  }
}
