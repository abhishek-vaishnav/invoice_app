import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navdrawer',
  templateUrl: './navdrawer.component.html',
  styleUrls: ['./navdrawer.component.css']
})
export class NavdrawerComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit() {
  }

  log(item:any) : void {
    console.log(item);
  }

}
