import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HallOfFameComponent } from "./halloffame.component";


const routes: Routes = [
  { path: '', component: HallOfFameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallOfFameRoutingModule { }
