import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

export const routes: Routes = [
    {path: '', redirectTo:'/login',pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'admin-home', component: AdminHomeComponent},
    {path: 'admin-home/details/:username', component: AdminDetailsComponent},
];
