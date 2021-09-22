import './styles.css'
import Products from './models/Products';
import ProductsGrid from './views/ProductsGrid';
import getData from './utils/getLocalData';
import ErrorView from './views/Error';

(async function App (){
    const data = await getData('products')
    if(data.error){
        new ErrorView(data.error)
    }
    const model = new Products(data);
    const productsGrid = new ProductsGrid(
        document.querySelector('.items'), 
        model.getAll()
    );
    productsGrid.render();
})();
