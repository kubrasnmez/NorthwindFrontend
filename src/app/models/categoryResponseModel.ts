import { Category } from "./category";
import { ResponseModel } from "./responseModule";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}