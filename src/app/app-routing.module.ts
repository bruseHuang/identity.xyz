import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, StartComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'start', component: StartComponent },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
