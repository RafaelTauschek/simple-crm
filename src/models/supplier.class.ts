export class User {
    name: string;
    id: number;
    email: string;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any){
        this.name = obj ? obj.name : '';
        this.id = obj ? obj.id : '';
        this.email = obj ? obj.email : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}