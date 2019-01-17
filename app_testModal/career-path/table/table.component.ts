import { Component, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @ViewChild('b1') b1;
  @ViewChild('b2') b2;
  @ViewChild('b7') b7;

  ngOnInit() {
    console.log('b1 ', this.b1.nativeElement.offsetLeft, ' ', this.b1.nativeElement.offsetTop);
    console.log('b2 ', this.b2.nativeElement.offsetLeft, ' ', this.b2.nativeElement.offsetTop);
    console.log('b7 ', this.b7.nativeElement.offsetLeft, ' ', this.b7.nativeElement.offsetTop);
    let line = d3.select('svg');

  }

}
