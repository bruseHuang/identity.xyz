import { Component } from '@angular/core';
import { Theme } from './_lib/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Identity';
  theme = Theme.dark;
}
