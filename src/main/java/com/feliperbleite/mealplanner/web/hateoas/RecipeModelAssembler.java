package com.feliperbleite.mealplanner.web.hateoas;


import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import com.feliperbleite.mealplanner.domain.Recipe;
import com.feliperbleite.mealplanner.web.controllers.RecipeController;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

@Component
public class RecipeModelAssembler implements RepresentationModelAssembler<Recipe, EntityModel<Recipe>> {
    @Override
    public EntityModel<Recipe> toModel(Recipe recipe) {
        return new EntityModel<>(recipe,
                linkTo(methodOn(RecipeController.class).getOneRecipe(recipe.getId())).withSelfRel(),
                linkTo(methodOn(RecipeController.class).getRecipes()).withRel("employees"));
    }
}
