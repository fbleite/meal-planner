package com.feliperbleite.recipedecider;

import com.feliperbleite.recipedecider.domain.Recipe;
import com.feliperbleite.recipedecider.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;


@Component
@Slf4j
public class RecipeInitializer {


    @Autowired
    RecipeRepository repository;

    @PostConstruct
    public void init() {
//        repository.save(new Recipe("Mexidão", "Salsicha"));
//        repository.save(new Recipe("Carbonara", "Macarrão"));
//        repository.save(new Recipe("Bolognese", "Macarrão"));
//        repository.save(new Recipe("Arroz Feijão bife e brocolis", "Sei La"));
//        repository.save(new Recipe("Tacos", "Sei La"));
//
//
//        log.info("----- fetching all recipes -----");
//        log.info("--------------------------------");
//
//        for (Recipe recipe : repository.findAll()) {
//            log.info(recipe.toString());
//        }
//        log.info("");
//
//
//        log.info("----- fetching recipe by Id -----");
//        log.info("--------------------------------");
//        Recipe recipe = repository.findById(1L).get();
//        log.info(recipe.toString());
//        log.info("");
//
//
//        log.info("----- fetching recipe by category -----");
//        log.info("--------------------------------");
//        for (Recipe macarrao: repository.findByType("Macarrão")) {
//            log.info(macarrao.toString());
//        }
//        log.info("");
    }
}
