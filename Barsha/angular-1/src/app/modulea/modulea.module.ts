import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';


@NgModule({
  declarations: [
    ModuleaComponent,
    SimpleHttpComponent
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule,
    HttpClientModule
  ]
})
export class ModuleaModule { }
