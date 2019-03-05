import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
	{
		path: '', redirectTo: 'invoice/manage', pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: './layout/layout.module#LayoutModule'
	},
	{
		path: '',
		loadChildren: './core/core.module#CoreModule'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
