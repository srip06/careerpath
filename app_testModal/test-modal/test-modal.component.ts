import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  modalComponent(n){
    this.bsModalRef = this.modalService.show(ModalContentComponent);
    this.bsModalRef.content.closeBtnName = 'Close'
    this.bsModalRef.content.title = 'My Modal '+ n
    this.bsModalRef.content.list = ['Harini', 'Chakri']

    console.log(this.bsModalRef);
  }

  getN(n){
    console.log('clickable ',n);
  }

}

@Component({
  selector: 'modal-content',
  template:`
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `,
})
export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef){}

  ngOnInit(){
    console.log(this.bsModalRef);
  }

}
