import { ProviderModel } from 'src/model/ProviderModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private dataList: ProviderModel[] = [
    {
      id: 1,
      logo_provider: 'data:image/png;base64,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',
      providerName: 'Me Cloud Tech',
      telNumber: '02-013-1881',
      webUrl: 'www.mecloud.co.th',
      detail: '-'
    },
    {
      id: 2,
      logo_provider: 'data:image/png;base64,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',
      providerName: 'Cloud HM',
      telNumber: '02-315-7504',
      webUrl: 'www.cloudhm.com',
      detail: '-'
    },
    {
      id: 3,
      logo_provider: 'data:image/png;base64,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',
      providerName: 'CRM and Cloud',
      telNumber: '02-030-0072',
      webUrl: 'www.crm-c.com',
      detail: '-'
    }
  ]

  constructor() { }

  findAll(): ProviderModel[] {
    return this.dataList;
  }

  findById(id:number): ProviderModel {
    return this.dataList.find((value) => value.id === id);
  }
}