import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe('Omu-Rice',
         'Super tasty omlet made with fried rice',
         'https://media4.giphy.com/media/zt5rq5llaIWerhq7A7/giphy.gif?cid=ecf05e47pxfff9ms4fdtngq8fnsl1ntoalxg5flpb7ba6cys&rid=giphy.gif&ct=g',
         [
           new Ingredient("Rice", 1),
           new Ingredient("Egg", 4)
         ]),
        new Recipe('Sangyeopsal',
         'Grilled Pork belly',
         'https://media0.giphy.com/media/l1KsKeN8PUEtWPCBa/giphy.gif?cid=ecf05e47dih441t1m1f3kyv931c7scqltejbw3spxrs3b7xv&rid=giphy.gif&ct=g',
         [
           new Ingredient("Pork-belly",1)
         ])
      ];
      constructor(private slService: ShoppingListService){}
      getRecipes(){ 
                    return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredientfromRecipe(ingredient)
      }
}