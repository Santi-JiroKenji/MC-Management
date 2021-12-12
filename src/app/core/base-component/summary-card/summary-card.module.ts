import { SummaryCardComponent } from './summary-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SummaryCardComponent],
    exports: [SummaryCardComponent]
})
export class SummaryCardModule { }