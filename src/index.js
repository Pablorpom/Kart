import './styles.css'
import Products from './models/Products';
import ProductsGrid from './views/ProductsGrid';
import getData from './utils/getLocalData';
import ErrorView from './views/Error';
import Kart from './models/kart';
import KartProducts from './views/KartProducts';

(async function App (){
    const data = await getData('products')
    if(data.error){
        new ErrorView(data.error)
    }
    const model = new Products(data);
    const kart = new Kart()
    const kartProducts = new KartProducts(
        {
            node: document.querySelector('.kart-items'),
            buttonAction: (event)=>{
                if(event.target.nodeName === 'BUTTON'){
                    const itemId = event.target.parentElement.dataset.productId;
                    kart.removeItem(itemId);
                    kartProducts.render(kart.getAllItems())
                }
            }
        }
    );
    const productsGrid = new ProductsGrid(
        {
            node: document.querySelector('.items'), 
            productsData: model.getAll(),
            buttonAction: (event) => {
                const itemId = event.target.parentElement.dataset.productId
                kart.addItem(itemId);
                kartProducts.render(kart.getAllItems())
            }
        }
    );
    productsGrid.render();
})();
