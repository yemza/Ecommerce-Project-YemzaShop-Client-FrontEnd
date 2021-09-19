import { ICategory } from "./i-category";

export interface IProduct {
    id?: number;
    title?: string;
    description?:  string
    images?: string
    price?: number;
    quantity?: number;
    shortDesc?: string;     
    category?: ICategory;

}
