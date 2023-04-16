import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./frontOffice/not-found/not-found.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {HomeComponent} from "./frontOffice/home/home.component";
import {SidebarComponent} from "./dashboard/sidebar/sidebar.component";
import {BackHomeComponent} from "./dashboard/back-home/back-home.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'home',children: [
      {path:'backdash',component:BackHomeComponent},
      {path:'singUp',component:SignUpComponent}
    ]},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
