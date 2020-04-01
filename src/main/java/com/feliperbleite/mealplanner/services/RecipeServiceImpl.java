package com.feliperbleite.mealplanner.services;

import com.feliperbleite.mealplanner.domain.Recipe;
import com.feliperbleite.mealplanner.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {


    @Autowired
    RecipeRepository repository;

    @Override
    public List<Recipe> getRecipes(Optional<Boolean> random, Optional<Integer> numberOfRecipes) {
        List<Recipe> returnedRecipes = repository.findAll();

        if (random.isPresent() && random.get()) {
            Collections.shuffle(returnedRecipes);
        }

        if (numberOfRecipes.isPresent()) {
            returnedRecipes = returnedRecipes.subList(0, numberOfRecipes.get());
        }

        return returnedRecipes;
    }
}
