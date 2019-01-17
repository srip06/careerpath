import { Component, OnInit, ViewChild } from '@angular/core';
import { anchorDef } from '@angular/core/src/view';


@Component({
  selector: 'app-test-svg',
  templateUrl: './test-svg.component.html',
  styleUrls: ['./test-svg.component.css']
})
export class TestSvgComponent implements OnInit {

  constructor() { }

  @ViewChild('el1') e1;
  @ViewChild('el2') e2;
  @ViewChild('el3') e3;
  @ViewChild('el4') e4;


  ngOnInit() {
    console.log(this.e1.nativeElement.offsetLeft+'-'+this.e1.nativeElement.offsetTop);
    console.log(this.e2.nativeElement.offsetLeft+'-'+this.e2.nativeElement.offsetTop);

    console.log(this.e3.nativeElement.offsetLeft+'-'+this.e3.nativeElement.offsetTop);
    console.log(this.e4.nativeElement.offsetLeft+'-'+this.e4.nativeElement.offsetTop);


    // var posnALeft = {
    //   x: this.divA.nativeElement.offsetLeft - 8,
    //   y: this.divA.nativeElement.offsetTop  + this.divA.nativeElement.offsetHeight / 2
    // };
    // var posnARight = {
    //   x: this.divA.nativeElement.offsetLeft + this.divA.nativeElement.offsetWidth + 8,
    //   y: this.divA.nativeElement.offsetTop  + this.divA.nativeElement.offsetHeight / 2    
    // };
    // var posnBLeft = {
    //   x: this.divB.nativeElement.offsetLeft - 8,
    //   y: this.divB.nativeElement.offsetTop  + this.divA.nativeElement.offsetHeight / 2
    // };
    // var posnBRight = {
    //   x: this.divB.nativeElement.offsetLeft + this.divB.nativeElement.offsetWidth + 8,
    //   y: this.divB.nativeElement.offsetTop  + this.divA.nativeElement.offsetHeight / 2
    // };
    // var dStrLeft =
    //     "M" +
    //     (posnALeft.x      ) + "," + (posnALeft.y) + " " +
    //     "C" +
    //     (posnALeft.x - 100) + "," + (posnALeft.y) + " " +
    //     (posnBLeft.x - 100) + "," + (posnBLeft.y) + " " +
    //     (posnBLeft.x      ) + "," + (posnBLeft.y);
    // this.arrowLeft.nativeElement.setAttribute("d", dStrLeft);
    // var dStrRight =
    //     "M" +
    //     (posnBRight.x      ) + "," + (posnBRight.y) + " " +
    //     "C" +
    //     (posnBRight.x + 100) + "," + (posnBRight.y) + " " +
    //     (posnARight.x + 100) + "," + (posnARight.y) + " " +
    //     (posnARight.x      ) + "," + (posnARight.y);
    // this.arrowRight.nativeElement.setAttribute("d", dStrRight);     
  }

}
