import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../domain/recipe';
import { RECIPES } from '../domain/mock-recipes';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesUrl: string = 'recipes';
  recipes: Recipe [] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    RECIPES.forEach(recipe => this.recipes.push(recipe));
  }
 
  
  getRecipes() : Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl)
                .pipe(tap(_ => this.log("Fetched recipes")), 
                    catchError(this.handleError<Recipe[]>("getRecipes", [])));
  }

  addRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe, this.httpOptions)
                    .pipe(tap((newRecipe: Recipe) => this.log(`Added recipe with id=${newRecipe.id}`)),
                        catchError(this.handleError<Recipe>('addRecipe')));
  }

  
  updateRecipe(recipeUpdated: Recipe) : Observable<any> {
    const id = typeof recipeUpdated === 'number' ? recipeUpdated : recipeUpdated.id;
    const url = `${this.recipesUrl}/${id}`;
    return this.http.put(url, recipeUpdated, this.httpOptions)
            .pipe(
                tap(_ => this.log(`Updated recipe with id=${recipeUpdated.id}`)),
                catchError(this.handleError<Recipe>('updateRecipe')));
  }

  deleteRecipe(recipeToBeDeleted: Recipe): Observable<Recipe>{
    const id = typeof recipeToBeDeleted === 'number' ? recipeToBeDeleted : recipeToBeDeleted.id;
    const url = `${this.recipesUrl}/${id}`;

    return this.http.delete<Recipe>(url, this.httpOptions)
              .pipe(tap(_=> this.log(`deleted recipe with id = ${recipeToBeDeleted.id}`),
                      catchError(this.handleError<Recipe>('deleteRecipe'))));

  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
