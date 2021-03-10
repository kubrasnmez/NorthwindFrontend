import { Product } from "./product";
import { ResponseModel } from "./responseModule";

export interface ProductResponseModel extends ResponseModel{
    data:Product[],

}