import { ProvidersMainComponent } from './providers-main/providers-main.component';
import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { ProvidersRoutes } from './providers.routing';
import { DialogFormModule } from 'src/app/core/base-component/dialog-form/dialog-form.module';
import { ProvidersFormComponent } from './providers-form/providers-form.component';

@NgModule ({
    imports: [
        CommonModule,
        ProvidersRoutes,
        MatTableModule,
        MatPaginatorModule,
        DialogViewModule,
        DialogFormModule
    ],
    declarations: [
        ProvidersMainComponent,
        ProvidersFormComponent
    ]
})
export class ProviderModule { }