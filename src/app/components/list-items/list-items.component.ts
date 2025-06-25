import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceItem } from '../../models/invoiceItem';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  @Input() items:InvoiceItem[] =[]

  @Output() removeEventEmitter:EventEmitter<number>= new EventEmitter()
  onRemove(id:number){
      this.removeEventEmitter.emit(id)
  }
}
