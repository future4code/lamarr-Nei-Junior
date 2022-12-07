// type para tipar no typescript com camelCase
export class Purchase {
    private id: string;
    private userId: string;
    private productId: string;
    private quantity: number;
    private totalPrice: number;

    constructor(id:any, userId:any, productId:any, quantity:any, totalPrice:any){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity.
        this.totalPrice = totalPrice
    }

    public getId() {
        return this.id
    }
    public getUserid() {
        return this.userId
    }
    public getProductId() {
        return this.productId
    }
    public getQuantity() {
        return this.quantity
    }
    public getTotalPrice() {
        return this.totalPrice
    }
    }


// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}