import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DemoFormComponent } from './pages/demo-form/demo-form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupformComponent } from './pages/signupform/signupform.component';

const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'demo-form' , component:DemoFormComponent},
  {path : 'signup', component: SignupformComponent},
  {path: 'courses/:id', component : CoursesComponent},
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) },
  {path: "**" , component:PageNotFoundComponent}
  // {path :'coursesdetail/:id' , component :CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
