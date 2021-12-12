import { PackagesMainComponent } from './packages-main/packages-main.component';
import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { DialogFormModule } from './../../core/base-component/dialog-form/dialog-form.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PackagesRoutes } from './packages.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { PackagesFormComponent } from './packages-form/packages-form.component';

@NgModule ({
    imports: [
        CommonModule,
        PackagesRoutes,
        MatTableModule,
        MatPaginatorModule,
        DialogFormModule,
        DialogViewModule
    ],
    declarations: [
        PackagesMainComponent,
        PackagesFormComponent
    ]
})
export class PackagesModule { }