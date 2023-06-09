import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './page/history-page/history-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
})
export class HistoryModule { }
