package com.feliperbleite.recipedecider.repositories;

import com.feliperbleite.recipedecider.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByName(String name);
    List<Recipe> findByType(String name);
//    Recipe findById(long id);
}
