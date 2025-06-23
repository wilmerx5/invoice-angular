import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceViewComponent, ClientViewComponent,CompanyViewComponent,ListItemsComponent,RowItemComponent ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private invoiceService: InvoiceService) {  }
  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice()
  }

}
