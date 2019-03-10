import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageInvoiceComponent
  },
  {
    path: 'create',
    component: CreateInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
