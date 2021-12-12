import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProviderModel } from 'src/model/ProviderModel';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-providers-form',
  templateUrl: './providers-form.component.html',
  styleUrls: ['./providers-form.component.scss']
})
export class ProvidersFormComponent implements OnInit {

  id:number;

  userImageUrl:string="./assets/images/user.png";

  @Input()
    data: ProviderModel;

  constructor(
    route: ActivatedRoute,
    private providerService: ProviderService,
  ) { 
    const {id: id} = route.snapshot.params;
    this.id = Number(id);
    this.data = this.providerService.findById(this.id);
  }

  ngOnInit(): void {
  }

}
