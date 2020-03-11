import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
    recipes = [];
    constructor(private http: HttpClient) {
      http.get('recipes').subscribe(recipesWeb => {
        let recipesArray = recipesWeb as {}[]
        recipesArray.forEach(recipe => this.recipes.push(recipe));
        // this.recipes.push(recipes))
      })
    }

    addRecipe(recipeName : string, recipeCategory: string) {
      var recipe = {"name": recipeName, "category": recipeCategory}
      this.recipes.push(recipe)

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // this.http.post('recipes', recipe, {headers : headers})
      this.http.post('recipes', recipe)
        .subscribe(res => {
           console.log('inside postmehtod of sub.function');//only objects
        })
    }

}
