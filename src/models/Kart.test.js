import Kart from "./Kart";

describe('Kart', ()=>{
    beforeEach(()=>{
        localStorage.removeItem('kart');
    })
    describe('constructor',()=>{
        it('Should get the kart key value from localStorage and parse it',()=>{
            localStorage.setItem('kart', JSON.stringify(['001', '002', '003'])); 
            const kart = new Kart()
            expect(kart.items).toEqual(['001', '002', '003'])
        })
        it('Should set the item value to an empty array if the kart key value is not found in the local storage', ()=>{
            const kart = new Kart()
            expect(kart.items).toEqual([])
        })
    })
    describe('addItem()',()=>{
        it('Should add an item to the items array',()=>{
            const kart = new Kart()
            kart.addItem('001');
            expect(kart.getAllItems()).toEqual(['001'])
        })
    })
    describe('removeItem()',()=>{
        it('Should remove an item from the items array',()=>{
            const kart = new Kart()
            kart.items = ['001', '002']
            kart.removeItem('001');
            expect(kart.getAllItems()).toEqual(['002'])
        })
    })
    describe('getAllItems()',()=>{
        it('Should return the items array',()=>{
            const kart = new Kart()
            kart.items = ['001', '002']
            expect(kart.getAllItems()).toEqual(['001','002'])
        })
    })
    describe('persistItems()',()=>{
        it('Should persist the items array in the local storage',()=>{
            const kart = new Kart()
            kart.items = ['001', '002']
            kart.persistItems();
            expect(localStorage.getItem('kart'))
                .toEqual(JSON.stringify(kart.getAllItems()))
        })
    })
})