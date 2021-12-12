import { PackagesDataComponent } from './packages-data.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule ({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        PackagesDataComponent
    ],
    exports: [
        PackagesDataComponent
    ]
})
export class PackagesDataModule { }