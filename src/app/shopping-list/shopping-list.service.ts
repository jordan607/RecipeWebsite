import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()
    private ingredients: Ingredient[] =[
        new Ingredient("backon",5),
        new Ingredient("Tomato",10),
      ];

      getIngredients(){
          return this.ingredients.slice()
      }

      getIngredient(index :  number){
          return this.ingredients[index]
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

      removeIngredient(index : number){
        this.ingredients.splice(index,1)
        this.ingredientChanged.next(this.ingredients.slice())
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient
        this.ingredientChanged.next(this.ingredients.slice())
      }
}