import { PackageService } from 'src/app/service/package.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PackageModel } from 'src/model/PackageModel';
import { Component, Inject, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-detail-package-dialog',
  templateUrl: './detail-package-dialog.component.html',
  styleUrls: ['./detail-package-dialog.component.scss']
})
export class DetailPackageDialogComponent implements OnInit {

  package: PackageModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
      data: number,

    private packageService: PackageService
  ) { 
    this.package = this.packageService.findById(data);
  }

  ngOnInit(): void {
  }

}
