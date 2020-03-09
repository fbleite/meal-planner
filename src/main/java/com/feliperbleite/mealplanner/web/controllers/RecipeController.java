package com.feliperbleite.mealplanner.web.controllers;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import com.feliperbleite.mealplanner.domain.Recipe;
import com.feliperbleite.mealplanner.exceptions.RecipeNotFoundException;
import com.feliperbleite.mealplanner.repositories.RecipeRepository;
import com.feliperbleite.mealplanner.web.hateoas.RecipeModelAssembler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@Slf4j
public class RecipeController {

    @Autowired
    RecipeRepository repository;

    @Autowired
    RecipeModelAssembler assembler;

    @GetMapping("/recipes")
    public CollectionModel<EntityModel<Recipe>> getRecipes () {
         List<EntityModel<Recipe>> recipes = repository.findAll().stream().
                                                map(assembler::toModel).
                                                collect(Collectors.toList());

         return new CollectionModel<>(recipes, linkTo(methodOn(RecipeController.class).getRecipes()).withSelfRel());
    }

    @PostMapping("/recipes")
    public ResponseEntity<?> newRecipe(@RequestBody Recipe recipe) {
        EntityModel<Recipe> entityRecipe = assembler.toModel(repository.save(recipe));
        return ResponseEntity.created(entityRecipe.getRequiredLink(IanaLinkRelations.SELF).toUri()).
                body(entityRecipe);
    }


    @GetMapping("/recipes/{id}")
    public EntityModel<Recipe> getOneRecipe(@PathVariable long id) {
        Recipe recipe =  repository.findById(id).orElseThrow(() -> new RecipeNotFoundException(id));
        return assembler.toModel(recipe);
    }


    @PutMapping("/recipes/{id}")
    public ResponseEntity<?> replaceRecipe(@RequestBody Recipe newRecipe, @PathVariable long id) {
        Recipe updatedRecipe =  repository.findById(id).map(
                recipe -> {
                    recipe.setName(newRecipe.getName());
                    recipe.setCategory(newRecipe.getCategory());
                    return repository.save(recipe);
                }
        ).orElseGet(() -> {
            newRecipe.setId(id);
            return repository.save(newRecipe);
        });

        EntityModel entityRecipe = assembler.toModel(updatedRecipe);

        return ResponseEntity.created(entityRecipe.getRequiredLink(IanaLinkRelations.SELF).toUri()).
                body(entityRecipe);

    }


    @DeleteMapping("/recipes/{id}")
    public ResponseEntity<?> deleteRecipe(@PathVariable long id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
