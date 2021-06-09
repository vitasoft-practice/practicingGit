import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './pages/demo-form/demo-form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupformComponent } from './pages/signupform/signupform.component';

const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'demo-form' , component:DemoFormComponent},
  {path : 'signup', component: SignupformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
