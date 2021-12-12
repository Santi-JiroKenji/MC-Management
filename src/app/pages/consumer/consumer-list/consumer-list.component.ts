import { ConsumerService } from './../../../service/consumer.service';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerModel } from './../../../../model/ConsumerModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailConsumerDialogComponent } from 'src/app/core/base-component/dialog-view/detail-consumer-dialog/detail-consumer-dialog.component';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

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

  url = this.router.url;

  constructor(
    public dialog: MatDialog,
    private consumerService: ConsumerService,
    private router: Router
  ) { 
    this.customerList = this.consumerService.findAll();
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

  onClickConsumerAdd() {
    this.router.navigateByUrl(`${this.url}/add`);
  }

  onClickConsumerEdit(id: number) {
    this.router.navigateByUrl(`${this.url}/edit/${id}`);
  }

}
