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
        } = this.data;
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        const htmlString = `
            <div data-product-id="${id}" class="product">
                <h3>${brand}</h3>
                <h2>${name}</h2>
                <img src="${photos[0]}" alt="${name}">
                <p>${description}</p>
                <h3>${formatter.format(price)}</h3>
                <button class="add-button">Add to kart</button>
            </div>
        `
        return htmlString;
    }
    createDomElement({ buttonAction }){
        const div = document.createElement('div');
        div.innerHTML = this.createHTML().trim();
        const button = div.querySelector('.add-button');
        button.addEventListener('click', buttonAction);
        return div.firstChild;
    }
}