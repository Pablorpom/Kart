export default class Kart {
    constructor(){
        this.items = []
    }
    addItem(item){
        const index = this.items.indexOf(item);
        if (index === -1) {
            this.items.push(item);
        }
    }
    removeItem(item){
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    getAllItems(){
        return this.items
    }
}