import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestwatchRoutingModule } from './testwatch-routing.module';
import { TestwatchComponent } from './testwatch.component';


@NgModule({
  declarations: [
    TestwatchComponent
  ],
  imports: [
    CommonModule,
    TestwatchRoutingModule
  ]
})
export class TestwatchModule { }
