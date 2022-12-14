export class Product {
    private id: string;
    private name: string;
    private price: number;

    constructor(id:any, name:any, price:any){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getPrice() {
        return this.price
    }
}