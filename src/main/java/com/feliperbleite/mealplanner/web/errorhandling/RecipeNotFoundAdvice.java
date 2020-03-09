package com.feliperbleite.recipedecider.web.errorhandling;

import com.feliperbleite.recipedecider.exceptions.RecipeNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class RecipeNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(RecipeNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String recipeNotFoundHandler(RecipeNotFoundException ex){
        return ex.getMessage();
    }

}
