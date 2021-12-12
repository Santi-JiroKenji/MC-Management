import { DialogSelectModule } from './../../core/base-component/dialog-select/dialog-select.module';
import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { ConsumerRoutes } from './consumer.routing';
import { ConsumerCardDetailModule } from './../../core/base-component/consumer-card-detail/consumer-card-detail.module';
import { SummaryCardModule } from './../../core/base-component/summary-card/summary-card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';

@NgModule ({
    imports: [
        CommonModule,
        ConsumerRoutes,
        SummaryCardModule,
        ConsumerCardDetailModule,
        DialogViewModule,
        DialogSelectModule
    ],
    declarations: [
        ConsumerListComponent,
        ConsumerFormComponent
    ]
})
export class ConsumerModule { }