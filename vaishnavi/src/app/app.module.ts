import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NewcompComponent } from './newcomp/newcomp.component' ;
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // NewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
