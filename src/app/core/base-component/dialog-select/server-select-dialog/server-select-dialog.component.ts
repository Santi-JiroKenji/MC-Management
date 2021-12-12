import { ServerService } from './../../../../service/server.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServerModel } from 'src/model/ServerModel';

@Component({
  selector: 'app-server-select-dialog',
  templateUrl: './server-select-dialog.component.html',
  styleUrls: ['./server-select-dialog.component.scss']
})
export class ServerSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['serverName', 'status', 'provider', 'cpu', 'ram', 'ssd', 'action'];
  dataSource = new MatTableDataSource<ServerModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private serverService: ServerService) {
    this.dataSource.data = this.serverService.findAll();
  }
}

const ELEMENT_DATA: ServerModel[] = [];