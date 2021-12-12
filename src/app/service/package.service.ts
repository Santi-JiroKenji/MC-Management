import { PackageModel } from 'src/model/PackageModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private dataList: PackageModel[] = [
    {
      id: 1,
      packageName: 'Basic',
      system: 'TMS',
      carValue: 'No more than 5 cars',
      userValue: 'No more than 10 users',
      mobileSupport: 'Android',
      serverType: 'VPS',
      backup: '-',
      support: '-',
      functionForConsumer: 'Full',
      shipmentValue: 'Unlimited',
      cargoList: 'Unlimited',
      promotion: 'Free',
      viewMode: true,
    },
    {
      id: 2,
      packageName: 'Business',
      system: 'TMS',
      carValue: 'According to usage',
      userValue: 'Unlimited',
      mobileSupport: 'Android,IOS',
      serverType: 'Cloud',
      backup: 'Yes',
      support: 'Call & Remote',
      functionForConsumer: 'Full',
      shipmentValue: 'Unlimited',
      cargoList: 'Unlimited',
      promotion: '12',
      viewMode: false
    },
    {
      id: 3,
      packageName: 'Enterprise',
      system: 'TMS + VRP',
      carValue: 'According to usage',
      userValue: 'Unlimited',
      mobileSupport: 'Android,IOS',
      serverType: 'Cloud',
      backup: 'Yes',
      support: 'Call & Remote',
      functionForConsumer: 'Full',
      shipmentValue: 'Unlimited',
      cargoList: 'Unlimited',
      promotion: 'Call Support',
      viewMode: true
    },
  ]

  constructor() { }
  findAll(): PackageModel[] {
    return this.dataList;
  }

  findById(id:number): PackageModel {
    return this.dataList.find((value) => value.id === id);
  }
}
