import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
