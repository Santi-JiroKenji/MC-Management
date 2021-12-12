import { DetailServerDialogComponent } from './../../../core/base-component/dialog-view/detail-server-dialog/detail-server-dialog.component';
import { ServerService } from './../../../service/server.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServerModel } from 'src/model/ServerModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers-main',
  templateUrl: './servers-main.component.html',
  styleUrls: ['./servers-main.component.scss']
})
export class ServersMainComponent implements OnInit {

  displayedColumns: string[] = ['serverName', 'memory', 'disk', 'provider', 'status', 'action'];
  dataSource = new MatTableDataSource<ServerModel>(ELEMENT_DATA);

  url = this.router.url;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public serverFormDialog: MatDialog,
    private serverService: ServerService,
    private router: Router,
    public dialogServerDetail: MatDialog
  ) { 
    this.dataSource.data = this.serverService.findAll();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onClickServerAdd() {
    this.router.navigateByUrl(`${this.url}/add`);
  }

  onClickServerViewInfo(id:number) {
    this.dialogServerDetail.open(DetailServerDialogComponent, {
      width: '1011px',
      data: id
    });
  }

  onClickServerEdit(id:number) {
    this.router.navigateByUrl(`${this.url}/edit/${id}`);
  }

}
const ELEMENT_DATA: ServerModel[] = [];
