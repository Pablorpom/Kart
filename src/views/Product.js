export default class Product{
    constructor(data){
        this.data =  data
    }
    createHTML(){
        const {
            name, 
            brand, 
            description, 
            id, 
            category, 
            price, 
            photos
        } = this.data
        const htmlString = `
            <div id="${id}">
                <h3>${brand}</h3>
                <h2>${name}</h2>
                <img src="${photos[0]}" alt="${name}">
                <p>${description}</p>
                <h3>${price}</h3>
                <button class="add-btn">Add to kart</button>
            </div>
        `
    return htmlString;
    }
}