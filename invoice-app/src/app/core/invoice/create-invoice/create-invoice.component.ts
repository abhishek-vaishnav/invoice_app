import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    this.addNewRow();
  }

  products = [];

  submitForm(form) {
    if(form.invalid) {
      return;
    }
    form.value.product_details = this.products;
    this.invoiceService.addInvoice(form);
  }

  addNewRow() {  
    this.products.push({
      name: '',
      quantity: 0,
      price: 0
    });
  };

  getTotal() {
    var total = 0;
    this.products.forEach(function(item){
      total += item.quantity * item.price;
    });
    return total;
  };

  remove(index) {
    this.products.splice(index, 1);
    if(this.products.length == 0) {
      this.addNewRow();
    }
  };

  showFormPreview() {
    window.print();
  }
  
  log(products) {
    console.log(products);
    console.log(this.products);
    
  }

}