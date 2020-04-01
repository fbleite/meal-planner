import { Recipe } from './recipe';

export interface MealSchedule {
    [weekday: string] : Recipe;
}