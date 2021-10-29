import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] =[
        new Ingredient("backon",5),
        new Ingredient("Tomato",10),
      ];

      getIngredients(){
          return this.ingredients.slice()
      }

      addedIngredients(passedaIngredient : Ingredient){
        this.ingredients.push(passedaIngredient)
        this.ingredientChanged.emit(this.ingredients.slice())
      }
}