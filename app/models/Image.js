export default class Image {
  constructor(data){
    this.id = data.id;
    this.url = data.url;
    this.large_url = data.large_url;
    this.source_id = data.source_id;
    this.copyright = data.copyright
    this.site = data.site
  }

  get Template(){
    return `
    <h1>${this.id}</h1>
    <img src="${this.large_url}" alt="">
    `
  }
}