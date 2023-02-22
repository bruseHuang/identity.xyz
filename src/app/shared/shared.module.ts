import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslatePipe } from './pipes/translate.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { NavLeftComponent, BottomComponent } from '@shared';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

const COMPONENTS = [NavLeftComponent, BottomComponent];
const PIPES = [TranslatePipe, SafeHtmlPipe];
const THIRD_MODULES = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
];

@NgModule({
  declarations: [...PIPES, ...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...THIRD_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...PIPES,
    ...THIRD_MODULES,
    ...COMPONENTS,
  ],
})
export class SharedModule {}
