import { ConsumerModel } from 'src/model/ConsumerModel';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailConsumerDialogComponent } from 'src/app/core/base-component/dialog-view/detail-consumer-dialog/detail-consumer-dialog.component';
import { ConsumerService } from 'src/app/service/consumer.service';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent implements OnInit {

  counter: number;
  counterEnable: number;
  counterDisable: number;

  list = [ 
    {
      topic: 'Enable',
      detail: '1',
      color: 'success'
    },
    {
      topic: 'Disable',
      detail: '2',
      color: 'danger'
    }
  ];

  public displayMode: number = 1;

  customerList: ConsumerModel[] = [];

  constructor(
    public dialog: MatDialog,
    private consumerService: ConsumerService
  ) { 
    this.customerList = this.consumerService.findAll();

    this.counterEnable = this.customerList.filter(
      x => x.status == "Enable"
    ).length;

    this.counterDisable = this.customerList.filter(
      x => x.status =="Disable"
    ).length;

  }

  ngOnInit(): void {
  }

  onDisplayModelChang(mode: number): void {
    this.displayMode = mode;
  }

  onConsumerCardViewClick(id:number) {
    this.dialog.open(DetailConsumerDialogComponent, {
      width: '1011px',
      data: id
    })
  }
}
