import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
    recipes = {};
    constructor(private http: HttpClient) {
      http.get('recipes').subscribe(recipes => this.recipes = recipes);
    }
}
