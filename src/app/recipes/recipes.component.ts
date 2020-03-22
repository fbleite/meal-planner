import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../domain/recipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



export interface DialogData {
  action: string;
  recipe: Recipe;
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = [];

  constructor(private recipesService: RecipesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(recipesWeb => {
      let recipesArray = recipesWeb as {}[]
      recipesArray.forEach(recipe => this.recipes.push(recipe));
    })
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        action: "add",
        recipe: { name: "", category: "", id: null }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed');
        console.log(result);
        this.addRecipe(result.recipe.name, result.recipe.category);
      }
    });
  }

  openEditDialog(recipeUpdated: Recipe): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        action: "edit",
        recipe: recipeUpdated
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed');
        console.log(result);
        this.updateRecipe(result.recipe);
      }
    });
  }


  openDeleteDialog(recipeToBeDeleted: Recipe): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        action: "delete",
        recipe: recipeToBeDeleted
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        console.log('The dialog was closed');
        this.deleteRecipe(result.recipe);
      }
    });
  }

  addRecipe(recipeName: string, recipeCategory: string) {
    var recipe: Recipe = { id: null, name: recipeName, category: recipeCategory }
    this.recipesService.addRecipe(recipe).subscribe(recipe => this.recipes.unshift(recipe));
  }

  updateRecipe(recipeToBeUpdated: Recipe) {
    this.recipesService.updateRecipe(recipeToBeUpdated).subscribe(recipeUpdated => {
      this.recipes = this.recipes.map(recipe => recipe.id == recipeUpdated.id ? recipeUpdated : recipe);
    })
  }

  deleteRecipe(recipeToBeDeleted: Recipe) {
    this.recipesService.deleteRecipe(recipeToBeDeleted).subscribe(deletedRecipe =>
      this.recipes = this.recipes.filter(r => r !== deletedRecipe))
  }
}
