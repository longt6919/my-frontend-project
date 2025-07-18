import { Color } from "./color";
import { Order } from "./order";
import { Product } from "./product";
import { Size } from "./size";
export interface ProductDetail{
    id:number;
    order: Order;
    product: Product;
    quantity: number;
    size: Size;
    color: Color;
}