import { Customer } from "./Customer";

export class Rental {
    rentalId?:number
    returnDate?:Date
    customer_id?:number
    customer?:Customer
    rentalDate?:Date
    inventoryId?:number
    staffId?:number
}