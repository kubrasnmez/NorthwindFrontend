import { ResponseModel } from "./responseModule";

export interface ListResponseModel<T> extends ResponseModel{
    data : T[];
}