import { ConsumerInformationModule } from './../consumer-information/consumer-information.module';
import { DetailConsumerDialogComponent } from './detail-consumer-dialog/detail-consumer-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { ServersDataModule } from '../servers-data/servers-data.module';
import { PackagesDataModule } from '../packages-data/packages-data.module';
import { DetailServerDialogComponent } from './detail-server-dialog/detail-server-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { DetailProviderDialogComponent } from './detail-provider-dialog/detail-provider-dialog.component';
import { DetailPackageDialogComponent } from './detail-package-dialog/detail-package-dialog.component';

@NgModule ({
    imports: [
        CommonModule,
        MatDialogModule,
        ConsumerInformationModule,
        ServersDataModule,
        MatTableModule,
        PackagesDataModule
    ],
    declarations: [
        DetailConsumerDialogComponent,
        DetailServerDialogComponent,
        DetailProviderDialogComponent,
        DetailPackageDialogComponent,
    ],
    exports: [
        DetailConsumerDialogComponent,
        DetailServerDialogComponent
    ],
    entryComponents: [
        DetailConsumerDialogComponent,
        DetailServerDialogComponent
    ],
})
export class DialogViewModule { }