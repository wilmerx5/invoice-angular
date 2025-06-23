import { Client } from "./Client";
import { Company } from "./Company";
import { InvoiceItem } from "./invoiceItem";

export class Invoice{

    id!:number;
    name!:string;
    client!:Client;
    company!:Company;
    items!:InvoiceItem[];


}