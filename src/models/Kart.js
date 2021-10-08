export default class Kart {
    constructor(){
        // Get the items in the local storage and make an array
        const kartItems = localStorage.getItem('kart') 
        if(kartItems){
            this.items = JSON.parse(kartItems)
        }else{
            this.items = []
        }
    }
    addItem(item){
        const index = this.items.indexOf(item);
        if (index === -1) {
            this.items.push(item);
        }
        this.persistItems()
    }
    removeItem(item){
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.persistItems()
    }
    getAllItems(){
        return this.items
    }
    persistItems(){
        // Get all the items inside this.items array and put it in the local storage
        localStorage.setItem('kart', JSON.stringify(this.getAllItems()))
    }
}