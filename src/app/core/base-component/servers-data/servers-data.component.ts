import { ServerModel } from 'src/model/ServerModel';
import { Component, Input, OnInit } from '@angular/core';
import { ConsumerModel } from 'src/model/ConsumerModel';

@Component({
  selector: 'app-servers-data',
  templateUrl: './servers-data.component.html',
  styleUrls: ['./servers-data.component.scss']
})
export class ServersDataComponent implements OnInit {

  @Input()
    data: ServerModel;
  
  @Input()
    dataCon: ConsumerModel;

  constructor() { }

  ngOnInit(): void {
  }

}
