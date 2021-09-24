export default class KartProducts{
    constructor({ node, buttonAction }){
        this.node = node;
        this.attachEvents(buttonAction);
    }
    render(kart){
        this.node.innerHTML = kart.map((id) => `
            <div data-product-id="${id}">
                <h3>${id}</h3>
                <h4>${id}</h4>
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