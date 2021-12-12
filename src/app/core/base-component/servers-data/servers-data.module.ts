import { ServersDataComponent } from './servers-data.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule ({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        ServersDataComponent
    ],
    exports: [
        ServersDataComponent
    ]
})
export class ServersDataModule { }