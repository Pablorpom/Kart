export default class KartProducts{
    constructor({ node, buttonAction }){
        this.node = node;
        this.attachEvents(buttonAction);
    }
    render(kart){
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        // From a product array it crates a string and render it in the selected node
        this.node.innerHTML = kart.map(({id, name, price, photos}) => `
            <div data-product-id="${id}">
                <h3>${name}</h3>
                <h4>${formatter.format(price)}</h4>
                <img src="${photos[0]}" alt="${name}">
                <button class="remove-button">Remove</button>
            </div>
        `).join('')
    }
    attachEvents(buttonAction){
        this.node.addEventListener(
            'click', 
            buttonAction
        )
    }
}