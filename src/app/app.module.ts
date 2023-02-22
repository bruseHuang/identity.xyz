import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  HomeComponent,
  StartComponent,
  DevelopComponent,
  TeamComponent,
} from './pages';

const PAGECOMPONENTS = [
  HomeComponent,
  StartComponent,
  DevelopComponent,
  TeamComponent,
];

@NgModule({
  declarations: [AppComponent, ...PAGECOMPONENTS, TeamComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
