import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { ServersMainComponent } from './servers-main/servers-main.component';
import { DialogFormModule } from './../../core/base-component/dialog-form/dialog-form.module';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from '@angular/material/paginator';
import { ServersRoutes } from './servers.routing';
import { ServersFormComponent } from './servers-form/servers-form.component';

@NgModule ({
    imports: [
        CommonModule,
        ServersRoutes,
        MatTableModule,
        MatPaginatorModule,
        DialogViewModule,
        DialogFormModule
    ],
    declarations: [
        ServersMainComponent,
        ServersFormComponent
    ]
})
export class ServerModule { }