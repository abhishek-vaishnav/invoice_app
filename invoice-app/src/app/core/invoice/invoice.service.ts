import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  addInvoice(form) {
    // add details to db
  }

  getInvoices() {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get('/api/invoice/list',{headers:headers})
    .pipe(map(res => res));
  }
}
