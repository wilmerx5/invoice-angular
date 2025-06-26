import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceItem } from '../../models/invoiceItem';
import { InvoiceService } from '../../services/invoice.service';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceViewComponent, 
    ClientViewComponent,CompanyViewComponent,ListItemsComponent
    ,TotalComponent,
  FormItemComponent ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private invoiceService: InvoiceService) {  }
  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice()
  }
  getTotal(){
    return this.invoiceService.getInvoiceTotal()
  }
  removeItem(id:number){
    this.invoice.items=this.invoice.items.filter(it=>it.id!==id)
  }
  addItem(item:InvoiceItem){
    this.invoiceService.save(item)
      //this.invoice.items= [...this.invoice.items,item]
  }

}
