export default class Products{
    constructor(data){
        this.data = data.products
    }
    getAll(){
       return this.data
    }
    get(id){
        return this.getAll().find(
            product => product.id === id 
        )
    }
}