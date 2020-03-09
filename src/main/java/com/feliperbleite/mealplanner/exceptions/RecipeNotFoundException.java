package com.feliperbleite.mealplanner.exceptions;

public class RecipeNotFoundException extends RuntimeException {
    public RecipeNotFoundException(long id) {
        super("Could not find recipe: " + id);
    }
}
