import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillageRoutingModule } from './villages-routing.module';
import { VillageComponent } from './village/village.component';
import { VillageListComponent } from './village-list/village-list.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
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
