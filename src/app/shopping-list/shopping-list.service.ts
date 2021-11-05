import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>()
    private ingredients: Ingredient[] =[
        new Ingredient("backon",5),
        new Ingredient("Tomato",10),
      ];

      getIngredients(){
          return this.ingredients.slice()
      }

      addedIngredients(passedaIngredient : Ingredient){
        this.ingredients.push(passedaIngredient)
        this.ingredientChanged.next(this.ingredients.slice())
      }

      addIngredientfromRecipe(ingredients: Ingredient[]){
        
        // for(let ingredient of ingredients){
        //   this.addedIngredients(ingredient)
        // }
        this.ingredients.push(...ingredients)
        this.ingredientChanged.next(this.ingredients.slice())
      }
}