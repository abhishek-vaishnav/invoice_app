import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: 'user',
				loadChildren: './admin/admin.module#AdminModule'
			},
			{
				path: 'invoice',
				loadChildren: './invoice/invoice.module#InvoiceModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
