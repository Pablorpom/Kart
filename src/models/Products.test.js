import Products from "./Products";

describe('Products', ()=>{
    let data;
    let products;
    beforeEach(()=>{
        data = {products:[{id:'001'}, {id:'002'}, {id:'003'}]};
        products = new Products(data);
    })
    describe('constructor()',()=>{
        it('Should abstract the products property and store it in the data property',()=>{
            expect(products.data).toBe(data.products)
        })
        it('Should set the default value when a value is not given', ()=>{
            const productsNoData = new Products();
            expect(productsNoData.data).toEqual([])
        })
    })
    describe('getAll()', ()=>{
        it('Should get the data instance property', ()=>{
            products.data = 'data'
            expect(products.getAll()).toBe('data')
        })
    })
    describe('get()', ()=>{
        it('Should get an specific object based on the id', ()=>{
            expect(products.get('001')).toEqual({id:'001'});
            expect(products.get('001')).toBe(data.products[0]);
        })
        it('Should return undefined if the id does not match',()=>{
            expect(products.get('000')).toBe(undefined);
        })
    })
    describe('getAllByIds()', ()=>{
        it('Should return an array of objects based on an array of id\'s', ()=>{
            expect(products.getAllByIds(['001', '002', '003']))
                .toEqual(data.products);
            expect(products.getAllByIds(['002', '001', '003']))
                .toEqual([data.products[1],data.products[0],data.products[2]])
        })
    })
    
})