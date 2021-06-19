import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserItemComponent } from './pages/user-item/user-item.component';
import { PostCardComponent } from './pages/post-card/post-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormComponent } from './pages/demo-form/demo-form.component';
import { AuthortableComponent } from './pages/authortable/authortable.component';
import { SignupformComponent } from './pages/signupform/signupform.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
// import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserItemComponent,
    PostCardComponent,
    DemoFormComponent,
    AuthortableComponent,
    SignupformComponent,
    CoursesComponent,
    CourseDetailComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
   // StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([UserEffects]),
   BrowserAnimationsModule,
   //MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
