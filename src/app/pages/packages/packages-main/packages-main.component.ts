import { DetailServerDialogComponent } from './../../../core/base-component/dialog-view/detail-server-dialog/detail-server-dialog.component';
import { Router } from '@angular/router';
import { PackageService } from './../../../service/package.service';
import { MatPaginator } from '@angular/material/paginator';
import { PackageModel } from './../../../../model/PackageModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetailPackageDialogComponent } from 'src/app/core/base-component/dialog-view/detail-package-dialog/detail-package-dialog.component';

@Component({
  selector: 'app-packages-main',
  templateUrl: './packages-main.component.html',
  styleUrls: ['./packages-main.component.scss']
})
export class PackagesMainComponent implements OnInit {

  displayedColumns: string[] = ['packageName', 'system', 'carValue', 'userValue', 'mobileSupport', 'serverType', 'backup', 'support', 'action'];
  dataSource = new MatTableDataSource<PackageModel>(ELEMENT_DATA);

  url = this.router.url;

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(
    private packageService: PackageService,
    public packageDialogView: MatDialog,
    private router: Router,
    public dialogPackageDetail: MatDialog
  ) { 
    this.dataSource.data = this.packageService.findAll();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onClickPackageAdd() {
    this.router.navigateByUrl(`${this.url}/add`);
  }

  onClickPackageViewInfo(id:number) {
    this.dialogPackageDetail.open(DetailPackageDialogComponent, {
      width: '480px',
      data: id
    });
  }

  onClickPackageEdit(id:number) {
    this.router.navigateByUrl(`${this.url}/edit/${id}`);
  }

}
const ELEMENT_DATA: PackageModel[] = [];