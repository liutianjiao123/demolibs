import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class CoreModule { }
