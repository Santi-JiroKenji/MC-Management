import { ServerService } from './../../../../service/server.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { ServerModel } from 'src/model/ServerModel';

@Component({
  selector: 'app-detail-server-dialog',
  templateUrl: './detail-server-dialog.component.html',
  styleUrls: ['./detail-server-dialog.component.scss']
})
export class DetailServerDialogComponent implements OnInit {

  server: ServerModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
      data: number,
    private serverService: ServerService
  ) { 
    this.server = this.serverService.findById(data);
  }

  ngOnInit() {
  }

}
