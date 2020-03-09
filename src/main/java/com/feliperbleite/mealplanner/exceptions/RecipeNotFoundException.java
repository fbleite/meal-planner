package com.feliperbleite.recipedecider.exceptions;

public class RecipeNotFoundException extends RuntimeException {
    public RecipeNotFoundException(long id) {
        super("Could not find recipe: " + id);
    }
}
