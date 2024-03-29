import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule} from './login/login.module';
import { DashboardModule} from './dashboard/dashboard.module';


const routes: Routes = [
							{
								path : 'login',
								loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
							},
							{
								path :'dashboard',
								loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
							},
							
							{
								path:'',
								redirectTo:'login',
								pathMatch:'full'
							}
						];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
