import { ICategory } from "./i-category";
import { IProductImages } from "./i-productImages";

export interface IProduct {
    id?: number;
    title?: string;
    description?:  string
    image?: string
    price?: number;
    quantity?: number;
    shortDesc?: string;     
    category?: ICategory;
    productImages?: IProductImages[]
}
