import ProductView from './Product'

export default class ProductsGrid{
    constructor({ node, productsData, buttonAction }){
        this.node = node;
        this.productsData = productsData;
        this.buttonAction = buttonAction
    }
    render(){
        this.node.append(this.productsData.reduce(
            (node, product) => {
                const productView = new ProductView(product);
                const options = { buttonAction: this.buttonAction };
                node.append(productView.createDomElement(options));
                return node;
            },
            document.createElement('div')  
        ));
    }
}