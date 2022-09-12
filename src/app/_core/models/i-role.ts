import { IUser } from "./i-user";

export interface IRole {
       id: number;
	  RoleName ?:string;
       users ?: IUser[];
   }