import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../app.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  latticeID = 1;
  latticeLinks;

  constructor(
    private _service: RequestService
  ) { }

  ngOnInit() {
    //request Lattice Links
    this._service.fetchLatticeLinks(this.latticeID).subscribe(
      (d) => {
        this.latticeLinks = d
        console.log('lattice Links ', this.latticeLinks);
      },
        (err) => console.log('error in fetching Lattice Details ', err)
    )
  }

}
