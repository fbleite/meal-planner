import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MealScheduleComponent } from './meal-schedule/meal-schedule.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'meal-schedule', component: MealScheduleComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
