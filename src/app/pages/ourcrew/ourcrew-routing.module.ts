import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurcrewComponent } from "./ourcrew.component";


const routes: Routes = [
  { path: '', component: OurcrewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurcrewRoutingModule { }
