import { Price } from "./price";

export interface Product {
    id: string,
    name: string,
    status: string,
    price: Price,
    imageId: string
}