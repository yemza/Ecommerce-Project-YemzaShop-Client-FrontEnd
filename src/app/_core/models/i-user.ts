import { IAdresse } from "./i-adresse";
import { IBasket } from "./i-basket";
import { IOrder } from "./i-order";
import { IRole } from "./i-role";

export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  phone?: number;
  adresseEntityDAO?: IAdresse;
  orderEntityDAO?: IOrder[];
  basketEntityDAO?: IBasket;
  roles?: IRole[];
}
