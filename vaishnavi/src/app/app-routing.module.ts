import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouteComponent } from './route/route.component';
import { SigninComponent } from './signin/signin.component';
import { TestCompComponent } from './test-comp/test-comp.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  { path:'admin', component: AdminHomeComponent, canActivate:[AdminGuardGuard]},
  { path:'home', component: HomeComponent},
  { path:'signin', component: SigninComponent},
  { path:'checkout', component: CheckoutComponent},
  { path:'contacts', component: ContactsComponent},
  { path:'test' ,
  children:[
    { path:'comp', component: TestCompComponent}
]},
  
  // { path:'route/:id', component: RouteComponent}
  { path:'route', component: RouteComponent},
  { path: 'watch', loadChildren: () => import('./testwatch/testwatch.module').then(m => m.TestwatchModule) },
  { path:'**', component: PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
