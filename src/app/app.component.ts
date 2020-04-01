import { Component, OnInit } from '@angular/core';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Meal Planner';
    
    constructor(private iconService: IconService){}
    
    ngOnInit(): void {
        this.iconService.registerIcons();
    }
}
