import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; //routing import
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouteComponent } from './route/route.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
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
    RouteComponent,
    PagenotfoundComponent,
    HomeComponent,
    AdminHomeComponent,
    // NewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
