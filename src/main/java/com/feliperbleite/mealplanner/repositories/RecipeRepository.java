package com.feliperbleite.mealplanner.repositories;

import com.feliperbleite.mealplanner.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByName(String name);

    List<Recipe> findByCategory(String name);
}
