import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { ConsumerCardDetailModule } from './../../core/base-component/consumer-card-detail/consumer-card-detail.module';
import { SummaryCardModule } from './../../core/base-component/summary-card/summary-card.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MonitorListComponent } from "./monitor-list/monitor-list.component";
import { MonitorRoutes } from './monitor.routing';

@NgModule({
    imports: [
        CommonModule,
        MonitorRoutes,
        SummaryCardModule,
        ConsumerCardDetailModule,
        DialogViewModule
    ],
    declarations: [
        MonitorListComponent,
    ]
})
export class MonitorModule { }