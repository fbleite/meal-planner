package com.feliperbleite.mealplanner.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String category;

    protected Recipe() {
    }

    public Recipe(String name, String category) {
        this.name = name;
        this.category = category;
    }
}
