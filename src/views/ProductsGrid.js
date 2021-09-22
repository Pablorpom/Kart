import ProductView from './Product'

export default class ProductsGrid{
    constructor(node, productsData){
        this.node = node;
        this.productsData = productsData;
    }
    render(){
        this.node.innerHTML = this.productsData.reduce(
            (completedHtml, product) => {
                const productView = new ProductView(product)
                completedHtml += productView.createHTML();
                return completedHtml;
            },
            ''
        );
    }
}