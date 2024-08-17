import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/shared/guards/auth.guard';

const routes: Routes = [

  {path:'',loadComponent:()=>import('./../layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),title:"Auth",children:[
    {path:"login",loadComponent:()=>import('./../pages/login/login.component').then((m)=>m.LoginComponent),title:"Login"}
  ]},
  {path:'',loadComponent:()=>import('./../layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),title:"Blank",children:[
    {path:"home",loadComponent:()=>import('./../pages/home/home.component').then((m)=>m.HomeComponent),title:"Home",canActivate:[authGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
