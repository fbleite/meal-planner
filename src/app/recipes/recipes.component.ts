import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../domain/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = [];
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(recipesWeb => {
      let recipesArray = recipesWeb as {}[]
      recipesArray.forEach(recipe => this.recipes.push(recipe));
    })
  }

  addRecipe(recipeName: string, recipeCategory: string) {
    var recipe: Recipe = {id: null, name: recipeName, category: recipeCategory }
    this.recipesService.addRecipe(recipe).subscribe(recipe => this.recipes.push(recipe));
  }

}
