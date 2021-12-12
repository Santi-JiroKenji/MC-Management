import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProviderModel } from 'src/model/ProviderModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProviderService } from 'src/app/service/provider.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailProviderDialogComponent } from 'src/app/core/base-component/dialog-view/detail-provider-dialog/detail-provider-dialog.component';

@Component({
  selector: 'app-providers-main',
  templateUrl: './providers-main.component.html',
  styleUrls: ['./providers-main.component.scss']
})
export class ProvidersMainComponent implements OnInit {

  displayedColumns: string[] = ['providerName', 'telNumber', 'webUrl', 'action'];
  dataSource = new MatTableDataSource<ProviderModel>(ELEMENT_DATA);

  url = this.router.url;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor( 
    public providerFormDialog: MatDialog, 
    public providerViewDialog: MatDialog, 
    private providerService: ProviderService,
    private router: Router,
    public dialogProviderDetail: MatDialog
    ) { 
      this.dataSource.data = this.providerService.findAll(); 
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onClickProviderAdd() {
    this.router.navigateByUrl(`${this.url}/add`);
  }

  onClickProviderViewInfo(id:number) {
    this.dialogProviderDetail.open(DetailProviderDialogComponent, {
      width: '480px',
      data: id
    });
  }

  onClickProviderEdit(id:number) {
    this.router.navigateByUrl(`${this.url}/edit/${id}`);
  }

}
const ELEMENT_DATA: ProviderModel[] = [];