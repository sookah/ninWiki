import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { VillageComponent } from './villages/village/village.component';


const routes: Routes = [
  { path: '', redirectTo: 'wiki/villages', pathMatch: 'full' },
  { path: 'wiki/villages', loadChildren: () => import('./villages/villages.module').then(m => m.VillagesModule) },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
