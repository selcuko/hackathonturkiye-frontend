import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from "./find.component";
import { NotfoundComponent } from "../notfound/notfound.component";


const routes: Routes = [
  { path: '', component: FindComponent },
  { path: 'hackathon', component: NotfoundComponent },  // Wrong route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }
