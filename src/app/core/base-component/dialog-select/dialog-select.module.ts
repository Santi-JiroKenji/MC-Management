import { PackageSelectDialogComponent } from './package-select-dialog/package-select-dialog.component';
import { ServerSelectDialogComponent } from './server-select-dialog/server-select-dialog.component';
import { PackagesDataModule } from './../packages-data/packages-data.module';
import { ServersDataModule } from './../servers-data/servers-data.module';
import { ConsumerInformationModule } from './../consumer-information/consumer-information.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule ({
    imports: [
        CommonModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        ConsumerInformationModule,
        ServersDataModule,
        PackagesDataModule
    ],
    declarations: [
        ServerSelectDialogComponent,
        PackageSelectDialogComponent
    ],
    exports: [
        ServerSelectDialogComponent,
        PackageSelectDialogComponent
    ],
    entryComponents: [
        ServerSelectDialogComponent,
        PackageSelectDialogComponent
    ]
})
export class DialogSelectModule { }