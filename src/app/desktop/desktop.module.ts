import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopComponent } from './desktop.component';
import { TerminalComponent } from '../terminal/terminal.component';


@NgModule({
  declarations: [
    DesktopComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ],
  exports: [
    DesktopComponent
  ]
})
export class DesktopModule { }
