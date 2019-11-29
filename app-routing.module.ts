import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnicalComponent } from './technical/technical.component';

import { AsiaComponent } from './asia/asia.component';
import { AustraliaComponent } from './australia/australia.component';
import { UsComponent } from './us/us.component';
import { UkComponent } from './uk/uk.component';
import { UaeComponent } from './uae/uae.component';

const routes: Routes = [
{
							path:'', 
							component: NewsComponent
						},
						{
							path:'news', 
							component: NewsComponent
						},
						{
							path:'sports', 
							component: SportsComponent
						},
						{
							path:'entertainment', 
							component: EntertainmentComponent
						},
						{
							path:'technical', 
							component:TechnicalComponent
						},

						{
							path:'asia', 
							component:AsiaComponent
						},
						{
							path:'australia', 
							component:AustraliaComponent
						},
						{
							path:'us', 
							component:UsComponent
						},
						{
							path:'uk', 
							component:UkComponent
						},
						{
							path:'uae', 
							component:UaeComponent
						}
						];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
