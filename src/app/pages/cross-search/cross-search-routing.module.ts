import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrossSearchComponent } from "./cross-search.component";

const routes: Routes = [
  { path: '', component: CrossSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrossSearchRoutingModule { }
