import { CommonModule } from '@angular/common';
import { ConsumerCardDetailComponent } from './consumer-card-detail.component';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        ConsumerCardDetailComponent
    ],
    exports: [
        ConsumerCardDetailComponent
    ]
})
export class ConsumerCardDetailModule { }