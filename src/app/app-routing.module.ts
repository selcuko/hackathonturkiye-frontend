import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from "./pages/notfound/notfound.component";

const routes: Routes = [
  { path: 'ana-sayfa', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'ekibimiz', loadChildren: () => import('./pages/ourcrew/ourcrew.module').then(m => m.OurcrewModule)},
  { path: 'basari-hikayeleri', loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule)},
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)},
  { path: 'iletisim', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  { path: 'etkinlikler', loadChildren: () => import('./pages/find/find.module').then(m => m.FindModule)},
  { path: 'etkinlikler/:etype', loadChildren: () => import('./pages/find/find.module').then(m => m.FindModule)},
  { path: 'etkinlikler/:etype/:eloc', loadChildren: () => import('./pages/find/find.module').then(m => m.FindModule)},
  { path: 'etkinlik/:slug', loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule)},
  { path: 'blog-detay/:slug', loadChildren: () => import('./pages/blog-detail/blog-detail.module').then(m => m.BlogDetailModule)},
  { path: '', redirectTo: '/ana-sayfa', pathMatch: 'full' }, // Redirect to `home`
  { path: '**', component: NotfoundComponent },  // Wrong route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
