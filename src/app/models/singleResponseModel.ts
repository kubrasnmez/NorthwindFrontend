import { ResponseModel } from "./responseModule";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T;
}