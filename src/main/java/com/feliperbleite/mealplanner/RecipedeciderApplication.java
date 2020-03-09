package com.feliperbleite.mealplanner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RecipedeciderApplication {


	private static final Logger log = LoggerFactory.getLogger(RecipedeciderApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(RecipedeciderApplication.class, args);
	}


}

