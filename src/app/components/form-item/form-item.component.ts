import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceItem } from '../../models/invoiceItem';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter<InvoiceItem>()

  private counterId = 4;
  item: InvoiceItem = {
    id: 5,
    product: 'ram',
    price: 4,
    quantity: 4
  }

  onSubmit(): void {
    this.counterId += 1
    this.addItemEventEmitter.emit({ ...this.item, id: this.counterId })
    this.item = {
      id: this.counterId,
      product: 'ram',
      price: 4,
      quantity: 4
    }
  }
}
