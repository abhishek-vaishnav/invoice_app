import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-manage-invoice',
  templateUrl: './manage-invoice.component.html',
  styleUrls: ['./manage-invoice.component.css']
})
export class ManageInvoiceComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }

  dataSource: MatTableDataSource<any>;

  ngOnInit() {
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe(
      invoice => {
        const dataArray = Object.keys(invoice).map(i => invoice[i]);
        this.dataSource = new MatTableDataSource(dataArray);
      }
    )
  }

}

const displayedColumns = ['checkbox', 'date', 'invoice #', 'recipient', 'creator', 'status', 'action', 'amount'];