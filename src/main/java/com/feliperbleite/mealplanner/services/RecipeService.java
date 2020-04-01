package com.feliperbleite.mealplanner.services;

import com.feliperbleite.mealplanner.domain.Recipe;

import java.util.List;
import java.util.Optional;

public interface RecipeService {
    public List<Recipe> getRecipes(Optional<Boolean> random, Optional<Integer> numberOfRecipes);
}
