import { Component, OnInit } from '@angular/core';
import { RequestService } from '../app.service';

@Component({
  selector: 'app-careerpathdraft',
  templateUrl: './careerpathdraft.component.html',
  styleUrls: ['./careerpathdraft.component.css']
})
export class CareerpathdraftComponent implements OnInit {

  latticeBasicDetails;
  latticeDetails;
  latticeDepartment;
  latticeTitle;
  latticeBox;
  latticeName: String = '';
  latticeID = 1;
  latticeLinks

  constructor(
    private _service: RequestService
  ) { }

  ngOnInit() {

    //request Lattice Basic Details from service
    this._service.fetchLatticeDetails(this.latticeID).subscribe(
      (d) => {
        this.latticeBasicDetails = d
        this.latticeName = this.latticeBasicDetails.lattice.LatticeTitle
      },
        (err) => console.log('error in fetching Lattice Details ', err)
    )

    //request Lattice departments, titles and boxID's from service
    this._service.fetchLatticeDeptTitle(this.latticeID).subscribe(
      (d) => {
        this.latticeDetails = d
        this.latticeDepartment = this.latticeDetails.departments.dept
        this.latticeTitle = this.latticeDetails.titles.title
        this.latticeBox = this.latticeDetails.boxes.box
      },
        (err) => console.log('error in fetching Lattice Details ', err)
    )

  }

  

}
