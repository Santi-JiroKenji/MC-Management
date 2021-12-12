import { ConsumerModel } from 'src/model/ConsumerModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-information',
  templateUrl: './consumer-information.component.html',
  styleUrls: ['./consumer-information.component.scss']
})
export class ConsumerInformationComponent implements OnInit {

  @Input()
    data: ConsumerModel;

  constructor() { }

  ngOnInit(): void {
  }

}
