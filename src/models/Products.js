export default class Products{
    constructor(data = {products:[]}){
        // Storage the data from a JSON with a products key
        this.data = data.products
    }
    getAll(){
        // Get the all the data from the source
       return this.data
    }
    get(id){
        // Get an specific id from the data
        return this.getAll().find(
            product => product.id === id 
        )
    }
    getAllByIds(idsList){
        // Get all the product with the id list
        return idsList.map(id => this.get(id))
    }
}