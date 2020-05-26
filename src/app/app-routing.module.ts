import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from "./pages/notfound/notfound.component";

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'ourcrew', loadChildren: () => import('./pages/ourcrew/ourcrew.module').then(m => m.OurcrewModule)},
  { path: 'brands', loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule)},
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)},
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to `home`
  { path: '**', component: NotfoundComponent },  // Wrong route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
