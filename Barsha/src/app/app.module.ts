import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserItemComponent } from './pages/user-item/user-item.component';
import { PostCardComponent } from './pages/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserItemComponent,
    PostCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
