import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { RequestService } from '../../app.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() boxID: Number;

  latticeBoxDetails;
  positions;
  arrayOfPositions: any[] = [];

  constructor(
    private _service: RequestService
  ) { }

  ngOnInit() {
    console.log('boxID ', this.boxID)

    this._service.fetchLatticeBox(this.boxID).subscribe(
        (data) => {
          this.latticeBoxDetails = data
          this.positions = this.latticeBoxDetails.box.position.PositionID
          if(typeof(this.latticeBoxDetails.box.position.PositionID) != 'undefined')
          {
            if(this.positions.length > 1)
                  this.arrayOfPositions = this.positions
            else
                  this.arrayOfPositions.push(this.positions)
          }

        },
          (err) => console.log('error in fetching lattice Box ', err)
      )

  }



}
