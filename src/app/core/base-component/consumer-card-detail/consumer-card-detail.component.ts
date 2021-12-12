import { ConsumerModel } from 'src/model/ConsumerModel';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consumer-card-detail',
  templateUrl: './consumer-card-detail.component.html',
  styleUrls: ['./consumer-card-detail.component.scss']
})
export class ConsumerCardDetailComponent implements OnInit {

  @Input()
    data: ConsumerModel;

  @Input()
    viewMode: boolean = false;
  
  @Output()
    clickView: EventEmitter<ConsumerModel> = new EventEmitter();

  @Output()
    clickEdit: EventEmitter<ConsumerModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickView() {
    this.clickView.emit(this.data);
  }

  onClickEdit() {
    this.clickEdit.emit(this.data);
  }

}
