import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { SideNavbarComponent } from "./side-navbar.component";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatDividerModule
    ],
    declarations: [
        SideNavbarComponent
    ],
    exports: [
        SideNavbarComponent
    ]
})
export class SideNavbarModule { }