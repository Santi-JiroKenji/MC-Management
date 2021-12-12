import { PackageService } from './../../../service/package.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { PackageModel } from 'src/model/PackageModel';

@Component({
  selector: 'app-packages-form',
  templateUrl: './packages-form.component.html',
  styleUrls: ['./packages-form.component.scss']
})
export class PackagesFormComponent implements OnInit {

  id:number;

  @Input()
    data: PackageModel;

  constructor(
    route: ActivatedRoute,
    private packageService: PackageService
  ) { 
    const {id: id} = route.snapshot.params;
    this.id = Number(id);
    this.data = this.packageService.findById(this.id);
  }

  ngOnInit(): void {
  }

}
