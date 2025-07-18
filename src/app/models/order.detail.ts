import { Order } from "./order";
import { ProductDetail } from "./product.detail";
export interface OrderDetail{
    id:number;
    order: Order;
    product_detail: ProductDetail;
    price: number;
    numberOfProducts: number;
    total_money: number;
}