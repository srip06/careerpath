import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { RequestService } from '../../../app.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  bsModalRef: BsModalRef;

  @Input() positionID: Number;

  latticePosition;
  positionDesc;
  positionName = '';
  grade;
  arrayOfGrades: any[] = [];
  segment;
  arrayOfSegments: any[] = [];

  constructor(
    private _service: RequestService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    //Lattice Position Details (circles on boxes) -- subscribe the observable from the service file
    this._service.fetchLatticePosition(this.positionID).subscribe(
      (data) => {
        this.latticePosition = data
        this.positionDesc = this.latticePosition.PositionDesc;
        this.positionName = this.latticePosition.PositionName;
        this.segment = this.latticePosition.segment.eachSegment;
        console.log('position details ',this.latticePosition);
        if(typeof(this.latticePosition.grade.eachGrade) != 'undefined')
          {
            this.grade = this.latticePosition.grade.eachGrade;
            console.log('grade ', this.grade);            
            if(this.grade.length > 1)
                  this.arrayOfGrades = this.grade
            else
                  this.arrayOfGrades.push(this.grade)
          }
        console.log('grade details ', this.arrayOfGrades);
        if(typeof(this.latticePosition.segment.eachSegment) != 'undefined')
          {
            this.segment = this.latticePosition.segment.eachSegment;            
            if(this.segment.length > 1)
                  this.arrayOfSegments = this.segment
            else
                  this.arrayOfSegments.push(this.segment)
          }
        console.log('segment details ', this.arrayOfSegments);

      },
        (err) => console.log('error in fetching lattice position ', err)
    )

  }

  modalComponent(){
    console.log(this.positionDesc)
    console.log(this.arrayOfGrades);
    this.bsModalRef = this.modalService.show(PositionModalComponent);
    this.bsModalRef.content.title = this.positionName+' Position Details';
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.body = this.positionDesc;
    this.bsModalRef.content.arrayOfGrades = this.arrayOfGrades;
    this.bsModalRef.content.arrayOfSegments = this.arrayOfSegments;
  }

}


@Component({
  selector: 'app-positionModal',
  templateUrl: './positionModal.component.html'
})
export class PositionModalComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef){}
  name = 'sri';
  ngOnInit(){}

  saveDetails(){
    console.log('save details');
  }

}