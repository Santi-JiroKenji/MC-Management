import { Injectable } from '@angular/core';
import { ConsumerModel } from 'src/model/ConsumerModel';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private dataList: ConsumerModel[] = [
    {
      id: 1,
      logo: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30160039/1721.png',
      consumerName: 'Bollore logistics Co.,Ltd',
      contact: '02-261-1920',
      color: 'success',
      status: 'Enable',
      runtime: '3',
      carValue: '100',
      userValue: '10',
      expDate: '06/05/2022',
      timeExp: '315',
      email: 'bollor@logistics.com',
      address: '75/71 Richmond Building 19/F, Sukhumvit Soi 26, Sukhumvit Road, Klongton, Klongtoey, Bangkok',
      detail: 'Multimodal Transport, Trade Compliance, Contract Logistics',
      server: {
        serverName: 'HDW size XS',
        color: 'success',
        status: 'Enable',
        endPoint: '192.991.632.8',
        provider: 'Me Cloud Tech',
        cpu: '2 core',
        ram: '2 GB',
        ssd: '40 GB',
        detail: '-'
      },
      package: {
        packageName: 'Enterprise',
        system: 'TMS + VSP',
        carValue: 'According to usage',
        userValue: 'Unlimited',
        mobileSupport: 'Android, IOS',
        serverType: 'Cloud',
        backup: 'Yes',
        support: 'Call & Remote'
      }
    },
    {
      id: 2,
      logo: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30160100/444.png',
      consumerName: 'DHL logistics(thailand) Co.,Ltd',
      contact: '02-779-9800',
      color: 'danger',
      status: 'Disable',
      runtime: '5',
      carValue: '120',
      userValue: '10',
      expDate: '05/03/2023',
      timeExp: '20',
      email: 'dhl_logistics@thailand.com',
      address: 'No. 9 G Tower Grand Rama 9 (North Wing), 26th Floor and 27th Floor, Rama IX Rd, Huai Khwang, Bangkok',
      detail: 'DHL is the global leader in the logistics industry.',
      server: {
        serverName: 'HDW size R1',
        color: 'danger',
        status: 'Disable',
        endPoint: '192.235.458.8',
        provider: 'Cloud HM',
        cpu: '1 core',
        ram: '1 GB',
        ssd: '20 GB',
        detail: '-'
      },
      package: {
        packageName: 'Business',
        system: 'TMS',
        carValue: 'According to usage',
        userValue: 'Unlimited',
        mobileSupport: 'Android, IOS',
        serverType: 'Cloud',
        backup: 'Yes',
        support: 'Call & Remote'
      }
    },
    {
      id: 3,
      logo: 'data:image/jpeg;base64,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',
      consumerName: 'KWC Logistics Co.,Ltd',
      contact: '02-871-3191',
      color: 'danger',
      status: 'Disable',
      runtime: '10',
      carValue: '100',
      userValue: '10',
      expDate: '15/01/2023',
      timeExp: '115',
      email: 'kwc.logistics@thailand.com',
      address: '185 Rat Burana Rd, Bang Pakok, Rat Burana, Bangkok',
      detail: '',
      server: {
        serverName: 'HDW size R1',
        color: 'success',
        status: 'Disable',
        endPoint: '192.235.458.8',
        provider: 'Cloud HM',
        cpu: '1 core',
        ram: '1 GB',
        ssd: '20 GB',
        detail: '-'
      },
      package: {
        packageName: 'Business',
        system: 'TMS',
        carValue: 'According to usage',
        userValue: 'Unlimited',
        mobileSupport: 'Android, IOS',
        serverType: 'Cloud',
        backup: 'Yes',
        support: 'Call & Remote'
      }
    }
  ]

  constructor() { 
    
  }


  findAll(): ConsumerModel[] {
    // fetch api .....
    // console.log('find all');
    return this.dataList;
  }

  findById(id: number): ConsumerModel {
    // console.log('find by id');
    return this.dataList.find((value) => value.id === id);
  }
}
