import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

@NgModule({
  declarations: [ManageInvoiceComponent, CreateInvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
