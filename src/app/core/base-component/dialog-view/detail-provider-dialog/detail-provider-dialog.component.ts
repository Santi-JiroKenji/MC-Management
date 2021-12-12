import { ProviderService } from 'src/app/service/provider.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ProviderModel } from 'src/model/ProviderModel';

@Component({
  selector: 'app-detail-provider-dialog',
  templateUrl: './detail-provider-dialog.component.html',
  styleUrls: ['./detail-provider-dialog.component.scss']
})
export class DetailProviderDialogComponent implements OnInit {

  provider: ProviderModel = {};

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
      data:number,
    
    private providerService: ProviderService
  ) { 
    this.provider = this.providerService.findById(data);
  }

  ngOnInit(): void {
  }

}
