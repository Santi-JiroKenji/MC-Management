import { ConsumerModel } from 'src/model/ConsumerModel';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsumerService } from 'src/app/service/consumer.service';

@Component({
  selector: 'app-detail-consumer-dialog',
  templateUrl: './detail-consumer-dialog.component.html',
  styleUrls: ['./detail-consumer-dialog.component.scss']
})
export class DetailConsumerDialogComponent implements OnInit {

  consumer: ConsumerModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    data: number,
    private consumerService: ConsumerService
  ) { 
    this.consumer = this.consumerService.findById(data);
  }

  ngOnInit() {
  }

}
