import { PackageModel } from './../../../../model/PackageModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages-data',
  templateUrl: './packages-data.component.html',
  styleUrls: ['./packages-data.component.scss']
})
export class PackagesDataComponent implements OnInit {

  @Input()
    data: PackageModel;

  constructor() { }

  ngOnInit(): void {
  }

}
