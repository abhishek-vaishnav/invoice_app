import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatCardModule, MatIconModule, MatTableModule, MatCheckboxModule, MatButtonModule, MatProgressSpinnerModule, MatToolbarModule, MatListModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule { }
