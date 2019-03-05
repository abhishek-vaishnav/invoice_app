import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';

@NgModule({
  declarations: [ManageInvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
