import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../domain/recipe';
import { RECIPES } from '../domain/mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe [] = [];
  constructor() { 
    RECIPES.forEach(recipe => this.recipes.push(recipe));
  }

  getRecipes() : Observable<Recipe[]> {
    return of (this.recipes);
  }

  addRecipe(recipe: Recipe) : Observable<Recipe> {
    var maxId: number = Math.max.apply(Math, this.recipes.map(recipe =>   recipe.id ));
    recipe.id = maxId+1;
    this.recipes.unshift(recipe);
    return of (recipe);
  }

  updateRecipe(recipeUpdated: Recipe) : Observable<Recipe> {
    this.recipes = this.recipes.map(recipe => recipe.id == recipeUpdated.id ? recipeUpdated : recipe);
    return of (recipeUpdated)
  }

  deleteRecipe(recipeToBeDeleted: Recipe): Observable<Recipe>{
    console.log(this.recipes);
    console.log(recipeToBeDeleted);
    this.recipes.splice(this.recipes.indexOf(recipeToBeDeleted), 1);
    console.log(this.recipes);
    return of (recipeToBeDeleted);

  }
}
