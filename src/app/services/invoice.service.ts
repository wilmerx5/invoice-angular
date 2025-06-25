import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

   private invoice:Invoice= invoiceData
  constructor() { }

  getInvoice():Invoice{
    return this.invoice;
  }

  getInvoiceTotal():number{
    
    const total =this.invoice.items.reduce((vc,va)=>vc+(va.quantity*va.price),0)
    return total
  }
}
