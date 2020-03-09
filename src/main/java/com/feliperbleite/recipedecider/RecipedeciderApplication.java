package com.feliperbleite.recipedecider;

import com.feliperbleite.recipedecider.domain.Recipe;
import com.feliperbleite.recipedecider.repositories.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RecipedeciderApplication {


	private static final Logger log = LoggerFactory.getLogger(RecipedeciderApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(RecipedeciderApplication.class, args);
	}


}

