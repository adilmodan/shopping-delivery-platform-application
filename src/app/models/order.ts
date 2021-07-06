export class Order {
    id: number;
    name: string;
    price: number;
    description: string;
    image: any;

    constructor(id, name, price, description, image) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }
}
