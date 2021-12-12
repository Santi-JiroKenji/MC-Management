import { Component, OnInit, ViewChild } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';
import { PackageModel } from 'src/model/PackageModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-package-select-dialog',
  templateUrl: './package-select-dialog.component.html',
  styleUrls: ['./package-select-dialog.component.scss']
})
export class PackageSelectDialogComponent implements OnInit {
  displayedColumns: string[] = ['packageName', 'system', 'carValue', 'userValue', 'serverType', 'backup', 'action'];
  dataSource = new MatTableDataSource<PackageModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private packageService: PackageService) {
    this.dataSource.data = this.packageService.findAll();
  }
}

const ELEMENT_DATA: PackageModel[] = [];
