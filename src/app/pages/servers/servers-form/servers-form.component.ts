import { ServerService } from './../../../service/server.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ServerModel } from 'src/model/ServerModel';

@Component({
  selector: 'app-servers-form',
  templateUrl: './servers-form.component.html',
  styleUrls: ['./servers-form.component.scss']
})
export class ServersFormComponent implements OnInit {

  id: number;

  @Input()
    data: ServerModel;

  constructor(
    route: ActivatedRoute,
    private serverService: ServerService
  ) {
    const { id: id} = route.snapshot.params;
    this.id = Number(id);
    this.data = this.serverService.findById(this.id);
  }

  ngOnInit(): void {
  }

}
