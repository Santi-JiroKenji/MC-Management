import { ConsumerInformationComponent } from './consumer-information.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        ConsumerInformationComponent
    ],
    exports: [
        ConsumerInformationComponent
    ]
})
export class ConsumerInformationModule { }