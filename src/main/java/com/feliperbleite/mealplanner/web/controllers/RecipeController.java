package com.feliperbleite.mealplanner.web.controllers;

import com.feliperbleite.mealplanner.domain.Recipe;
import com.feliperbleite.mealplanner.exceptions.RecipeNotFoundException;
import com.feliperbleite.mealplanner.repositories.RecipeRepository;
import com.feliperbleite.mealplanner.services.RecipeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@Slf4j
public class RecipeController {

    @Autowired
    RecipeRepository repository;

    @Autowired
    RecipeService recipeService;

    @GetMapping("/recipes")
    public List<Recipe> getRecipes(@RequestParam Optional<Boolean> random,
                                   @RequestParam Optional<Integer> numberOfRecipes) {
        return recipeService.getRecipes(random, numberOfRecipes);
    }

    @PostMapping("/recipes")
    public Recipe newRecipe(@RequestBody Recipe recipe) {
        Recipe savedRecipe = repository.save(recipe);
        return savedRecipe;
    }


    @GetMapping("/recipes/{id}")
    public Recipe getOneRecipe(@PathVariable long id) {
        return repository.findById(id).orElseThrow(() -> new RecipeNotFoundException(id));
    }


    @PutMapping("/recipes/{id}")
    public Recipe replaceRecipe(@RequestBody Recipe newRecipe, @PathVariable long id) {
        Recipe updatedRecipe = repository.findById(id).map(
                recipe -> {
                    recipe.setName(newRecipe.getName());
                    recipe.setCategory(newRecipe.getCategory());
                    return repository.save(recipe);
                }
        ).orElseGet(() -> {
            newRecipe.setId(id);
            return repository.save(newRecipe);
        });
        return updatedRecipe;

    }


    @DeleteMapping("/recipes/{id}")
    public void deleteRecipe(@PathVariable long id) {
        repository.deleteById(id);
    }

}
