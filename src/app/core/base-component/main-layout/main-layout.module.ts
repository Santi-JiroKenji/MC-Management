import { RouterModule } from '@angular/router';
// import { SideNavbarModule } from './../side-navbar/side-navbar.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./main-layout.component";

@NgModule({
    imports: [
        CommonModule,
        // SideNavbarModule,
        RouterModule
    ],
    declarations: [
        MainLayoutComponent
    ]
})
export class MainLayoutModule { }