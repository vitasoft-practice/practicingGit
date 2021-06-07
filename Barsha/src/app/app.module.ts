import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserItemComponent } from './pages/user-item/user-item.component';
import { PostCardComponent } from './pages/post-card/post-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormComponent } from './pages/demo-form/demo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserItemComponent,
    PostCardComponent,
    DemoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
