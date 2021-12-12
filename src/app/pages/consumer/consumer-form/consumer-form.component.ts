import { PackageSelectDialogComponent } from './../../../core/base-component/dialog-select/package-select-dialog/package-select-dialog.component';
import { ServerSelectDialogComponent } from './../../../core/base-component/dialog-select/server-select-dialog/server-select-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ConsumerModel } from 'src/model/ConsumerModel';
import { ConsumerService } from 'src/app/service/consumer.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.scss']
})
export class ConsumerFormComponent implements OnInit {

  id: number;

  userImageUrl:string="./assets/images/user.png";

  @Input()
    data: ConsumerModel;

  constructor(
    route: ActivatedRoute,
    private consumerService: ConsumerService,
    public dialogServerSelect: MatDialog,
    public dialogPackageSelect: MatDialog
  ) { 
    const { id: id} = route.snapshot.params;
    this.id = Number(id);
    this.data = this.consumerService.findById(this.id);
  }

  ngOnInit(): void {
  }

  onClickViewSelectServer() {
    this.dialogServerSelect.open(ServerSelectDialogComponent, {
      width: '1011px'
    });
  }

  onClickViewSelectPackage() {
    this.dialogPackageSelect.open(PackageSelectDialogComponent, {
      width: '1011px'
    });
  }

}
