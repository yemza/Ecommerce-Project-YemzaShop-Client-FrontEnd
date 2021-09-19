import { IAdresse } from "./i-adresse";

export interface IClient {
    id : number ;
   
	firstName  : string ;
	
	lastName :string  ;
	
	email : string ;
	
	
    phone : string ;

	adresseEntityDAO :IAdresse;
	
}