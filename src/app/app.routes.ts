import { Routes } from '@angular/router';
import { LoginPageComponent } from './Components/LoginPage/login.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UploadComponent } from './Components/Upload/upload.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'upload',component:UploadComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
