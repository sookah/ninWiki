import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageListComponent } from './village-list/village-list.component';
import { VillageComponent } from './village/village.component';

const routes: Routes = [{ path: '', component: VillageListComponent },
{ path: ':id', component: VillageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRoutingModule { }
