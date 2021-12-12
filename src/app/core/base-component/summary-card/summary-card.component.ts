import { Component, Input, OnInit } from '@angular/core';
import { ConsumerModel } from 'src/model/ConsumerModel';
import { ConsumerService } from 'src/app/service/consumer.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  @Input()
    topic: string;
  
  @Input()
    detail: number;

  @Input()
    color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
