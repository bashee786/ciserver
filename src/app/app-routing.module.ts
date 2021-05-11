import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewinfraComponent } from './viewinfra/viewinfra.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: '', redirectTo: '/login', pathMatch: 'full' },
{path: 'viewinfra', component: ViewinfraComponent},
{path: 'viewinfra', redirectTo: '/viewinfra', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
