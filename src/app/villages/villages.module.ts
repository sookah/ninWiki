import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageRoutingModule } from './villages-routing.module';
import { VillageComponent } from './village/village.component';
import { VillageListComponent } from './village-list/village-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    VillageComponent,
    VillageListComponent
  ],
  imports: [
    CommonModule,
    VillageRoutingModule,
    MatCardModule,
    MatSliderModule,
    MatGridListModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class VillagesModule { }
