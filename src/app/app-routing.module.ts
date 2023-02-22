import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DevelopComponent,
  HomeComponent,
  StartComponent,
  TeamComponent,
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'start', component: StartComponent },
  { path: 'dev', component: DevelopComponent },
  { path: 'team', component: TeamComponent },
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
