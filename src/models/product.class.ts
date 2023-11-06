export class Product {
    name: string;
    description: string;
    sku: number;
    price: number;
    category: string;
    brand: string;
    status: string;
    weight: number;
    quantity: number;
    

    constructor(obj?: any){
        this.name = obj ? obj.name : '';
        this.description = obj ? obj.description : '';
        this.sku = obj ? obj.sku : '';
        this.price = obj ? obj.price : '';
        this.category = obj ? obj.category : '';
        this.brand = obj ? obj.brand : '';
        this.status = obj ? obj.status : '';
        this.weight = obj ? obj.weight : '';
        this.quantity = obj ? obj.quantity : '';
    }

    public toJSON() {
        return {
            name: this.name,
            description: this.description,
            sku: this.sku,
            price: this.price,
            category: this.category,
            brand: this.brand,
            status: this.status,
            weight: this.weight,
            quantity: this.quantity,
        }
    }
}