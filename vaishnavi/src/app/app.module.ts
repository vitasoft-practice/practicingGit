import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HighlightPipe } from './highlight.pipe';
// import { NewcompComponent } from './newcomp/newcomp.component' ;
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    ParentComponent,
    ChildComponent,
    ContactsComponent,
    HighlightPipe,
    // NewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
